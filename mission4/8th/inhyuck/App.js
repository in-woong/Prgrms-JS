import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import TodoCount from './components/TodoCount.js';
import { validateTodoItems } from './utils/validateTodo.js';
import { fetchTodoItems } from './api.js';

export default function App({ $target, initData = {todoItems: []} }) {
    this.$target = $target;
    this.data = initData;

    const onSaveTodoItem = ({ todoItemText }) => {
        this.setState({
            todoItems: [
                ...this.data.todoItems,
                {
                    text: todoItemText,
                    isCompleted: false,
                },
            ],
        });
    };

    const onRemoveTodoItem = ({ todoItemIndex }) => {
        const newTodoItems = [...this.data.todoItems];
        newTodoItems.splice(todoItemIndex, 1);
        this.setState({
            todoItems: newTodoItems,
        });
    };

    const onCompleteTodoItem = ({ todoItemIndex }) => {
        const newTodoItems = [...this.data.todoItems];
        newTodoItems[todoItemIndex].isCompleted = !newTodoItems[todoItemIndex].isCompleted;
        this.setState({
            todoItems: newTodoItems,
        });
    };

    this.$target.addEventListener('removeAll', event => {
        event.stopPropagation();
        this.setState({
            todoItems: [],
        });
    });

    this.render = function () {
        this.$target.innerHTML = `
            <div class="todo-list"></div>
            <div class="todo-count"></div>
            <div class="todo-input"></div>
        `;

        this.todoList = new TodoList({
            $target: this.$target.querySelector('.todo-list'),
            initData: {todoItems: this.data.todoItems},
            onRemoveTodoItem,
            onCompleteTodoItem,
        });
        this.todoInput = new TodoInput({
            $target: this.$target.querySelector('.todo-input'),
            onSaveTodoItem,
        });
        this.todoCount = new TodoCount({
            $target: this.$target.querySelector('.todo-count'),
            initData: {todoItems: this.data.todoItems},
        });
    };

    this.setState = function (nextData) {
        const {todoItems} = nextData;
        validateTodoItems({ todoItems });

        this.data = nextData;
        this.todoList.setState({ todoItems: this.data.todoItems });
        this.todoCount.setState({ todoItems: this.data.todoItems });
    };

    this.initialize = async () => {
        this.render();
        const fetchedTodoItems = await fetchTodoItems();
        this.setState({todoItems: fetchedTodoItems});
    };

    this.initialize();
}

