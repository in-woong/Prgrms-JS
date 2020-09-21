import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import TodoCount from './components/TodoCount.js';
import { validateTodoItem, validateTodoItems } from './utils/validateTodo.js';
import { addTodoItem, fetchTodoItems, removeAllTodoItems, removeTodoItem } from './api.js';

export default function App({ $target, initData = {todoItems: []} }) {
    this.$target = $target;
    this.data = initData;

    const refreshTodoItems = async () => {
        const fetchedTodoItems = await fetchTodoItems();
        this.setState({todoItems: fetchedTodoItems});
    }

    const onSaveTodoItem = async ({ todoItemText }) => {
        const newTodoItem = {text: todoItemText, isCompleted: false};
        validateTodoItem({todoItem: newTodoItem});

        const addedTodoItem = await addTodoItem(newTodoItem);
        this.setState({
            todoItems: [
                ...this.data.todoItems,
                addedTodoItem,
            ],
        });
    };

    const onRemoveTodoItem = async ({ todoItemIndex }) => {
        await removeTodoItem({todoId: this.data.todoItems[todoItemIndex].id});
        await refreshTodoItems();
    };

    const onCompleteTodoItem = ({ todoItemIndex }) => {
        const newTodoItems = [...this.data.todoItems];
        newTodoItems[todoItemIndex].isCompleted = !newTodoItems[todoItemIndex].isCompleted;
        this.setState({
            todoItems: newTodoItems,
        });
    };

    this.$target.addEventListener('removeAll', async (event) => {
        event.stopPropagation();
        await removeAllTodoItems();
        await refreshTodoItems();
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
        await refreshTodoItems();
    };

    this.initialize(); //컴포넌트의 생성자함수를 async 로 명시할 수 없다. 하지만 찜찜하다...?
}

