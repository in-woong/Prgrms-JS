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
            onCompleteTodoItem({ todoItemIndex });
            return;
        }
        if (clickAction === 'remove') {
            await onRemoveTodoItem({ todoItemIndex });
            return;
        }
    });

    const convertTodoItemToInnerHtml = function ({ todoItem, todoItemIndex }) {
        const { text, isCompleted } = todoItem;
        return `
          <li class="item-wrap">
            <span class="txt ${isCompleted ? 'completed' : ''}" data-click-action="toggleComplete" data-todo-item-index="${todoItemIndex}">${text}</span>
            <button type="button" class="remove-btn" data-click-action="remove" data-todo-item-index="${todoItemIndex}">Remove</button>
          </li>
        `;
    };

    this.render = function () {
        this.$target.innerHTML = `<ul>
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
