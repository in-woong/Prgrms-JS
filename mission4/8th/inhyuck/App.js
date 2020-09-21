import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import TodoCount from './components/TodoCount.js';
import { validateTodoItem, validateTodoItems } from './utils/validateTodo.js';
import {
    addTodoItem,
    fetchTodoItems,
    removeAllTodoItems,
    removeTodoItem,
    toggleTodoItem,
} from './api.js';

const DEFAULT_USER_NAME = 'inhyuck';

export default function App({ $target, initData = {username: DEFAULT_USER_NAME, todoItems: []} }) {
    this.$target = $target;
    this.data = initData;

    //추가, 삭제, 전체삭제, 토글 등 api 를 호출하고 성공했을 때 전체 갱신 vs 부분만 임의갱신 => 고민해볼만한 문제...!
    const refreshTodoItems = async () => {
        const fetchedTodoItems = await fetchTodoItems({username: this.data.username});
        this.setState({todoItems: fetchedTodoItems});
    }

    const onSaveTodoItem = async ({ todoItemText }) => {
        const newTodoItem = {text: todoItemText, isCompleted: false};
        validateTodoItem({todoItem: newTodoItem});

        const addedTodoItem = await addTodoItem({username: this.data.username, ...newTodoItem});
        this.setState({
            todoItems: [
                ...this.data.todoItems,
                addedTodoItem,
            ],
        });
    };

    const onRemoveTodoItem = async ({ todoItemIndex }) => {
        await removeTodoItem({
            username: this.data.username,
            todoId: this.data.todoItems[todoItemIndex].id
        });
        await refreshTodoItems();
    };

    const onCompleteTodoItem = async ({ todoItemIndex }) => {
        await toggleTodoItem({
            username: this.data.username,
            todoId: this.data.todoItems[todoItemIndex].id
        });

        const newTodoItems = [...this.data.todoItems];
        newTodoItems[todoItemIndex].isCompleted = !newTodoItems[todoItemIndex].isCompleted;
        this.setState({
            todoItems: newTodoItems,
        });
    };

    this.$target.addEventListener('removeAll', async (event) => {
        event.stopPropagation();
        await removeAllTodoItems({username: this.data.username});
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
        validateTodoItems({ todoItems: nextData.todoItems });

        this.data = {
            ...this.data,
            ...nextData,
        };
        this.todoList.setState({ todoItems: this.data.todoItems });
        this.todoCount.setState({ todoItems: this.data.todoItems });
    };

    this.initialize = async () => {
        this.render();
        await refreshTodoItems();
    };

    this.initialize(); //컴포넌트의 생성자함수를 async 로 명시할 수 없다. 하지만 찜찜하다...?
}

