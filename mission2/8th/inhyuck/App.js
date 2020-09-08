function App({selector}) {
    this.$app = document.querySelector(selector);
    this.todoItems = [{
        text: 'default todoItem!',
        isCompleted: false,
    }];
    validateTodoItems({todoItems: this.todoItems});

    const onSaveTodoItem = ({todoItemText}) => {
        const newTodoItem = {
            text: todoItemText,
            isCompleted: false,
        };
        validateTodoItem({todoItem: newTodoItem});
        this.todoItems.push(newTodoItem);
        this.resetChildState();
    };

    const onRemoveTodoItem = ({todoItemIndex}) => {
        this.todoItems.splice(todoItemIndex, 1);
        this.resetChildState();
    };

    const onCompleteTodoItem = ({todoItemIndex}) => {
        this.todoItems[todoItemIndex].isCompleted = !this.todoItems[todoItemIndex].isCompleted;
        this.resetChildState();
    };

    this.$app.addEventListener('removeAll', event => {
        event.stopPropagation();
        this.todoItems = [];
        this.resetChildState();
    });

    this.render = function () {
        this.$app.innerHTML = `
            <div id="todo-list"></div>
            <div id="todo-count"></div>
            <div id="todo-input"></div>
        `;

        this.todoList = new TodoList({
            $targetElement: this.$app.querySelector('#todo-list'),
            todoItems: this.todoItems,
            onRemoveTodoItem,
            onCompleteTodoItem,
        });
        this.todoInput = new TodoInput({$targetElement: this.$app.querySelector('#todo-input'), onSaveTodoItem});
        this.todoCount = new TodoCount({$targetElement: this.$app.querySelector('#todo-count'), todoItems: this.todoItems});
    };

    this.resetChildState = function () {
        this.todoList.setState({newTodoItems: this.todoItems});
        this.todoCount.setState({todoItems: this.todoItems});
    };

    this.render();
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
