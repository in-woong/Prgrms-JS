function TodoList({ $targetElement, todoItems }) {
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

        const $todoItems = this.$todoList.querySelectorAll('ul > li');
        Array.from($todoItems).forEach(($todoItem, index) => {
            $todoItem.querySelector('.txt').addEventListener('click', () => {
                this.todoItems[index].isCompleted = !this.todoItems[index].isCompleted;
                this.render();
            });

            $todoItem.querySelector('.remove-btn').addEventListener('click', () => {
                this.todoItems.splice(index, 1);
                this.render();
            });
        });
    };
    this.setState = function ({ nextTodoItems }) {
        validateTodoItems({ todoItems: nextTodoItems });

        this.todoItems = nextTodoItems;
        this.render();
    };
    this.addTodoItem = function ({ todoItemText }) {
        const newTodoItem = {
            text: todoItemText,
            isCompleted: false,
        };
        validateTodoItem({todoItem: newTodoItem});

        this.todoItems.push(newTodoItem);
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
        errorHandler({ errorMessage: 'todoItems is empty' });
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

    return true;
}

function errorHandler({ errorMessage }) {
    throw new Error(errorMessage);
}
