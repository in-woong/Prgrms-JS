import TodoUser from './TodoUser.js';
import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import { fetchUsers, fetchTodoList, fetchAddTodo, fetchDeleteTodo, fetchDeleteAllTodo, fetchToggle } from './api.js';
import LoadingView from './loading.js';

const TEST_NAME = 'siwon';

// TodoInput과 TodoList를 관리하는 APP Component
export default function App() {
    const $userList = document.querySelector("#user-container");
    const $todoInput = document.querySelector("#todo-input");

    const $todoList = document.querySelector("#todo-list");

    const $todoUser = document.querySelector("#todo-user");
    const $todoCount = document.querySelector("#todo-count");
    const $btnClear = document.querySelector("#btn-clear");

    this.init = async () => {
        this.user = TEST_NAME;
        this.users = await this.getUser();

        this.loadingView = new LoadingView($todoList, false);
        this.data = await this.getTodos(this.user);

        this.todoUser = new TodoUser(this.users, $userList, this.setUserState);
        this.todoInput = new TodoInput($todoInput, this.addTodo);
        this.todoList = new TodoList(this.data, $todoList, this.deleteTodo, this.toggleTodo);
        this.todoCount = new TodoCount(this.data, $todoCount);
    }

    this.getUser = async () => {
        const result = await fetchUsers();
        return result;
    }

    this.getTodos = async (user = this.user) => {
        this.loadingView.setState(true);
        const result = await fetchTodoList(user);
        this.loadingView.setState(false);
        console.log(result);
        return result;
    }

    this.addTodo = async (todoData) => {
        const result = await fetchAddTodo(this.user, todoData);
        console.log(result);
        this.changeState();
    }

    this.deleteTodo = async (_id) => {
        const result = await fetchDeleteTodo(this.user, _id);
        console.log(result);
        this.changeState();
    }

    this.deleteAll = async () => {
        const result = await fetchDeleteAllTodo(this.user);
        console.log(result);
        this.changeState();
    }

    const clearEvent = new CustomEvent('clearAll');
    $btnClear.addEventListener('click', (e) => {
        $todoList.dispatchEvent(clearEvent);
    });

    $todoList.addEventListener('clearAll', () => {
        this.deleteAll(this.user);
    })
    
    this.toggleTodo = async (_id) => {
        const result = await fetchToggle(this.user, _id);
        console.log(result);
        this.changeState();
    }

    this.changeState = async () => {
        this.data = await this.getTodos(this.user);
        this.todoList.setState(this.data);
        this.todoCount.countCompleted(this.data);
    }

    this.setUserState = async (user) => {
        this.user = user;
        this.data = this.getTodos(this.user);
        $todoUser.innerHTML = `${this.user}'s TODO`;
        this.changeState();
    }

    this.init();
}
