import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import TodoCount from './components/TodoCount.js';
import localStorage from './utils/localStorage.js';
import { validateTodoItems } from './utils/validateTodo.js';

export default function App({ selector }) {
    this.$targetElement = document.querySelector(selector);
    this.todoItems = localStorage.getStorage({ key: 'todoItems' }) || [];
    validateTodoItems({ todoItems: this.todoItems });

    const onSaveTodoItem = ({ todoItemText }) => {
        this.setState({
            todoItems: [
                ...this.todoItems,
                {
                    text: todoItemText,
                    isCompleted: false,
                },
            ],
        });
    };

    const onRemoveTodoItem = ({ todoItemIndex }) => {
        const newTodoItems = [...this.todoItems];
        newTodoItems.splice(todoItemIndex, 1);
        this.setState({
            todoItems: newTodoItems,
        });
    };

    const onCompleteTodoItem = ({ todoItemIndex }) => {
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
            <div class="todo-list"></div>
            <div class="todo-count"></div>
            <div class="todo-input"></div>
        `;

        this.todoList = new TodoList({
            $targetElement: this.$targetElement.querySelector('.todo-list'),
            todoItems: this.todoItems,
            onRemoveTodoItem,
            onCompleteTodoItem,
        });
        this.todoInput = new TodoInput({
            $targetElement: this.$targetElement.querySelector('.todo-input'),
            onSaveTodoItem,
        });
        this.todoCount = new TodoCount({
            $targetElement: this.$targetElement.querySelector('.todo-count'),
            todoItems: this.todoItems,
        });
    };

    this.setState = function ({ todoItems }) {
        validateTodoItems({ todoItems });
        this.todoItems = todoItems;
        this.todoList.setState({ newTodoItems: todoItems });
        this.todoCount.setState({ todoItems: todoItems });
        localStorage.setStorage({
            key: 'todoItems',
            value: todoItems,
        });
    };

    this.render();
}

