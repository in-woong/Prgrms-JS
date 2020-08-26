import Users from './components/Users.js';
import TodoList from './components/TodoList.js';
import TodoInput from './components/TodoInput.js';
import TodoCount from './components/TodoCount.js';
import { todoListId, todoInputId, todoCountId, appId, userListId, todoDoneId, isLoading, DEFAULT_DELAY_TIME } from './lib/data.js';
import { getUserTodoList, addUserTodoList, deleteUserTodoList, deleteAllUserTodoList, toggleUserTodoList, getAllUserList } from './lib/api.js';
import { showError } from './lib/utils.js';

class App {
    constructor() {
        try {
            (async () => {
                await this.init();

                this.users = new Users({
                    elementId: userListId,
                    userList: this.todoState.userList,
                    currentUser: this.todoState.currentUser,
                    fetchUserData: this.fetchUserData.bind(this),
                })
                this.todoInput = new TodoInput({
                    elementId: todoInputId,
                    $app: this.$app,
                    addTodo: this.addTodo.bind(this),
                });
                this.todoList = new TodoList({
                    elementId: todoListId,
                    todoList: this.todoState.todoList,
                    deleteTodo: this.deleteTodo.bind(this),
                    toggleTodo: this.toggleTodo.bind(this),
                });
                this.todoDoneList = new TodoList({
                    elementId: todoDoneId,
                    todoList: this.todoState.todoList,
                    deleteTodo: this.deleteTodo.bind(this),
                    toggleTodo: this.toggleTodo.bind(this),
                });
                this.todoCount = new TodoCount({
                    elementId: todoCountId,
                    totalCount: this.todoState.totalCount,
                });
        
                await this.fetchData();

                this.bindEventListener();
            })();
        } catch(err) {
            showError(err);
            console.log(err.stack);
        }
    }

    async deleteTodo(_id) {
        await deleteUserTodoList({
            _id,
            currentUser: this.todoState.currentUser,
        });
        await this.fetchData();
    }

    async deleteAllTodoList() {
        await deleteAllUserTodoList(this.todoState.currentUser);
        await this.fetchData();
    }

    async toggleTodo(_id) {
        await toggleUserTodoList({
            _id,
            currentUser: this.todoState.currentUser,
        });
        await this.fetchData();
    }

    async addTodo(todo) {
        await addUserTodoList({
            todo,
            currentUser: this.todoState.currentUser,
        });
        await this.fetchData();
    }

    render() {
        this.users.setState(this.todoState.currentUser);
        this.todoList.setState(this.todoState.todoList);
        this.todoDoneList.setState(this.todoState.todoList);
        this.todoCount.setState(this.todoState.totalCount);
    }

    setState(nextState) {
        this.todoState = nextState;
        this.render();
    }

    bindEventListener() {
        this.$app.addEventListener('removeAll', () => this.deleteAllTodoList());
    }

    async init() {
        this.todoState = {
            todoList : [],
            totalCount: 0,
            userList : await getAllUserList(),
            currentUser : 'sky',
            delay : DEFAULT_DELAY_TIME,
        };

        this.$app = document.getElementById(appId);
    }

    setDelayTime() {
        this.todoState.delay = isNaN(parseInt(this.users.delay)) ? DEFAULT_DELAY_TIME : this.users.delay;
    }

    async fetchData() {
        this.setDelayTime();
        this.loadApiData(isLoading, this.todoState.delay);

        const todoList = await getUserTodoList({
            currentUser: this.todoState.currentUser,
            delay: this.todoState.delay,
        });
        const totalCount = todoList.length;

        this.setState({
            ...this.todoState,
            todoList,
            totalCount
        });

        this.loadApiData();
    }

    loadApiData(...param) {
        this.todoList.loadApiData(...param);
        this.todoCount.loadApiData(...param);
    }

    async fetchUserData(currentUser) {
        this.setState({
            ...this.todoState,
            currentUser,
        });
        await this.fetchData();
    }
}

export default App;
