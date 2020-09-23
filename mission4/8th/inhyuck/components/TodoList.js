import { errorHandler } from '../utils/errorHandler.js';

/**
 * @param $target
 * @param initData
 * @param initData.todoItems
 * @param initData.username
 * @param {COMPLETE_MODE} initData.completeMode
 * @param onRemoveTodoItem
 * @param onCompleteTodoItem
 * @constructor
 */
export default function TodoList({ $target, initData, onRemoveTodoItem, onCompleteTodoItem, onDropTodoItem }) {
    if (!(this instanceof TodoList)) {
        errorHandler({ errorMessage: 'not exist new keyword' });
    }

    this.$target = $target;
    this.data = initData;

    this.$target.addEventListener('click', async (event) => {
        event.stopPropagation();
        const { clickAction, todoItemIndex } = event.target.dataset;
        const todoId = this.data.todoItems[todoItemIndex].id;

        if (clickAction === 'toggleComplete') {
            await onCompleteTodoItem({ todoId });
            return;
        }
        if (clickAction === 'remove') {
            await onRemoveTodoItem({ todoId });
            return;
        }
    });

    this.$target.addEventListener('dragstart', (event) => {
        const { todoItemIndex } = event.target.dataset;
        event.dataTransfer.setData('text/plain', this.data.todoItems[todoItemIndex].id);
        event.dataTransfer.dropEffect = 'move';
    });

    this.$target.addEventListener('dragover', (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    });

    this.$target.addEventListener('drop', async (event) => {
        event.preventDefault();
        const todoId = event.dataTransfer.getData('text/plain');
        await onDropTodoItem({todoId, completeMode: this.data.completeMode});
    });

    const convertTodoItemToInnerHtml = function ({ todoItem, todoItemIndex }) {
        const { text, isCompleted } = todoItem;
        return `
          <li class="item-wrap">
            <span class="txt ${isCompleted ? 'completed' : ''}" draggable="true" data-click-action="toggleComplete" data-todo-item-index="${todoItemIndex}">${text}</span>
            <button type="button" class="remove-btn" data-click-action="remove" data-todo-item-index="${todoItemIndex}">Remove</button>
          </li>
        `;
    };

    this.render = function () {
        this.$target.innerHTML = `
            <h2><mark>${this.data.username}</mark>'s todoList (${this.data.completeMode})</h1>
            <ul>
                  ${this.data.todoItems.map((todoItem, index) => convertTodoItemToInnerHtml({
                      todoItem,
                      todoItemIndex: index,
                  })).join('')}
            </ul>`;
    };

    this.setState = function (nextData) {
        this.data = {
            ...this.data,
            ...nextData,
        };
        this.render();
    };

    this.render();
}
