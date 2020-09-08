function TodoList({ $targetElement, todoItems, onRemoveTodoItem, onCompleteTodoItem }) {
    if (!(this instanceof TodoList)) {
        errorHandler({ errorMessage: 'not exist new keyword' });
    }

    this.todoItems = todoItems;
    this.$todoList = $targetElement;

    this.render = function () {
        this.$todoList.innerHTML = `<ul>
                  ${this.todoItems.map((todoItem) => convertTodoItemToInnerHtml({ todoItem })).join('')}
            </ul>`;

        this.mounted();
    };

    this.mounted = function () {
        const $todoItems = this.$todoList.querySelectorAll('ul > li');
        Array.from($todoItems).forEach(($todoItem, index) => {
            $todoItem.querySelector('.txt').addEventListener('click', () => {
                onCompleteTodoItem({todoItemIndex: index});
            });

            $todoItem.querySelector('.remove-btn').addEventListener('click', () => {
                onRemoveTodoItem({todoItemIndex: index});
            });
        });
    };

    this.setState = function ({ newTodoItems }) {
        this.todoItems = newTodoItems;
        this.render();
    };

    this.render();
}

function convertTodoItemToInnerHtml({ todoItem }) {
    const { text, isCompleted } = todoItem;
    return `
          <li class="item-wrap">
            <span class="txt ${isCompleted ? 'completed' : ''}">${text}</span>
            <button type="button" class="remove-btn">Remove</button>
          </li>
        `;
}
