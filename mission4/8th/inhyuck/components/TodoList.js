function TodoList({ $targetElement, todoItems, onRemoveTodoItem, onCompleteTodoItem }) {
    if (!(this instanceof TodoList)) {
        errorHandler({ errorMessage: 'not exist new keyword' });
    }

    this.todoItems = todoItems;
    this.$targetElement = $targetElement;
    this.$targetElement.addEventListener('click', event => {
        event.stopPropagation();
        const { clickAction, todoItemIndex } = event.target.dataset;
        if (clickAction === 'toggleComplete') {
            onCompleteTodoItem({ todoItemIndex });
            return;
        }
        if (clickAction === 'remove') {
            onRemoveTodoItem({ todoItemIndex });
            return;
        }
    });

    this.render = function () {
        this.$targetElement.innerHTML = `<ul>
                  ${this.todoItems.map((todoItem, index) => convertTodoItemToInnerHtml({
              todoItem,
              todoItemIndex: index,
          }))
          .join('')}
            </ul>`;
    };

    this.setState = function ({ newTodoItems }) {
        this.todoItems = newTodoItems;
        this.render();
    };

    this.render();
}

function convertTodoItemToInnerHtml({ todoItem, todoItemIndex }) {
    const { text, isCompleted } = todoItem;
    return `
          <li class="item-wrap">
            <span class="txt ${isCompleted ? 'completed' : ''}" data-click-action="toggleComplete" data-todo-item-index="${todoItemIndex}">${text}</span>
            <button type="button" class="remove-btn" data-click-action="remove" data-todo-item-index="${todoItemIndex}">Remove</button>
          </li>
        `;
}
