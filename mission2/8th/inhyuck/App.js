function App({selector}) {
    this.$targetElement = document.querySelector(selector);
    this.todoItems = getStorage({key: 'todoItems'}) || [];
    validateTodoItems({todoItems: this.todoItems});

    const onSaveTodoItem = ({todoItemText}) => {
        this.setState({
            todoItems: [
                ...this.todoItems,
                {
                    text: todoItemText,
                    isCompleted: false,
                },
            ]
        });
    };

    const onRemoveTodoItem = ({todoItemIndex}) => {
        const newTodoItems = [...this.todoItems];
        newTodoItems.splice(todoItemIndex, 1);
        this.setState({
            todoItems: newTodoItems,
        });
    };

    const onCompleteTodoItem = ({todoItemIndex}) => {
        const newTodoItems = [...this.todoItems];
        newTodoItems[todoItemIndex].isCompleted = !newTodoItems[todoItemIndex].isCompleted;
        this.setState({
            todoItems: newTodoItems,
        });
    };

    this.$targetElement.addEventListener('removeAll', event => {
        event.stopPropagation();
        this.setState({
            todoItems: [],
        });
    });

    this.render = function () {
        this.$targetElement.innerHTML = `
            <div id="todo-list"></div>
            <div id="todo-count"></div>
            <div id="todo-input"></div>
        `;

        this.todoList = new TodoList({
            $targetElement: this.$targetElement.querySelector('#todo-list'),
            todoItems: this.todoItems,
            onRemoveTodoItem,
            onCompleteTodoItem,
        });
        this.todoInput = new TodoInput({$targetElement: this.$targetElement.querySelector('#todo-input'), onSaveTodoItem});
        this.todoCount = new TodoCount({$targetElement: this.$targetElement.querySelector('#todo-count'), todoItems: this.todoItems});
    };

    this.setState = function ({todoItems}) {
        validateTodoItems({todoItems});
        this.todoItems = todoItems;
        this.todoList.setState({newTodoItems: todoItems});
        this.todoCount.setState({todoItems: todoItems});
        setStorage({key: 'todoItems', value: todoItems})
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

//localStorage get/set
function getStorage({key}) {
    try {
        return JSON.parse(window.localStorage.getItem(key));
    } catch(error) {
        errorHandler({errorMessage: error.message});
    }
}
function setStorage({key, value}) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

function errorHandler({ errorMessage }) {
    throw new Error(errorMessage);
}
