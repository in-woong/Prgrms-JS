import { errorHandler } from '../utils/errorHandler.js';

export default function TodoList({ $target, initData, onRemoveTodoItem, onCompleteTodoItem }) {
    if (!(this instanceof TodoList)) {
        errorHandler({ errorMessage: 'not exist new keyword' });
    }

    this.$target = $target;
    this.data = initData;

    this.$target.addEventListener('click', async (event) => {
        event.stopPropagation();
        const { clickAction, todoItemIndex } = event.target.dataset;
        if (clickAction === 'toggleComplete') {
            await onCompleteTodoItem({ todoItemIndex });
            return;
        }
        if (clickAction === 'remove') {
            await onRemoveTodoItem({ todoItemIndex });
            return;
        }
    });

    this.$target.addEventListener('dragstart', (event) => {
        const { todoItemIndex } = event.target.dataset;
        event.dataTransfer.setData('text/plain', todoItemIndex);
        event.dataTransfer.dropEffect = 'move';
    });

    this.$target.addEventListener('dragover', (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    });

    this.$target.addEventListener('drop', (event) => {
        event.preventDefault();
        const todoItemIndex = event.dataTransfer.getData('text/plain');
        console.log(todoItemIndex);
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
            <h2><mark>${this.data.username}</mark>'s todoList</h1>
            <ul>
                  ${this.data.todoItems.map((todoItem, index) => convertTodoItemToInnerHtml({
                      todoItem,
                      todoItemIndex: index,
                  })).join('')}
            </ul>`;
    };

    this.setState = function (nextData) {
        this.data = nextData;
        this.render();
    };

    this.render();
}
