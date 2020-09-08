function TodoList({ $targetElement, todoItems, onRemoveTodoItem, onCompleteTodoItem }) {
    if (!(this instanceof TodoList)) {
        errorHandler({ errorMessage: 'not exist new keyword' });
    }
    const $todoList = $targetElement;
    if (!$todoList) {
        errorHandler({ errorMessage: 'target element is not found' });
    }
    validateTodoItems({ todoItems });

    this.todoItems = todoItems;
    this.$todoList = $todoList;

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
        validateTodoItems({ todoItems: newTodoItems });

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

function validateTodoItems({ todoItems }) {
    if (!todoItems) {
        errorHandler({ errorMessage: 'todoItems is null or undefined' });
    }

    if (!Array.isArray(todoItems)) {
        errorHandler({ errorMessage: 'todoItems is not Array' });
    }

    todoItems.forEach((todoItem) => validateTodoItem({ todoItem }));
}

function validateTodoItem({ todoItem }) {
    const { text, isCompleted } = todoItem;

    if (typeof text !== 'string' || text.trim() === '') {
        errorHandler({ errorMessage: 'text value is empty or is not string type' });
    }

    if (typeof isCompleted !== 'boolean') {
        errorHandler({ errorMessage: 'isCompleted value is empty or is not boolean type' });
    }
}

function errorHandler({ errorMessage }) {
    throw new Error(errorMessage);
}
