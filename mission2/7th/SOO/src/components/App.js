import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js';
import TodoCount from './TodoCount.js';
import {
    validate
} from '../utils/validation.js';

export default class App {
    constructor() {
        this.htmlID = 'todos'
        this.todos = this.getLocalStorage(this.htmlID);
        this.removeAllBtn = document.getElementById('removeAll')

        this.removeAllEvent = new Event('remove-all');
        this.removeAllBtn.addEventListener('remove-all', (e) => {
            this.removeAllTodos();
        })

        this.todoList = new TodoList({
            removeData: this.removeData,
            addData: this.addData,
            htmlID: this.htmlID,
            getLocalStorage: this.getLocalStorage,
            setLocalStorage: this.setLocalStorage
        });

        this.todoInput = new TodoInput({
            addTodo: this.addTodo,
            removeAllEvent: this.removeAllEvent
        });

        this.todoCount = new TodoCount({
            todos: this.todos
        });
    };

    addTodo = (text) => {
        if (text) {
            this.todos.push({
                text,
                isCompleted: false,
                id: Date.now()
            });
        }
        this.setState(this.todos)
    };

    setLocalStorage = (todolist) => {
        if (todolist !== (null || undefined)) {
            localStorage.setItem(this.htmlID, JSON.stringify(todolist));
        } else {
            localStorage.setItem(this.htmlID, JSON.stringify(this.todos));
        }
    };

    getLocalStorage = (key) => {
        const getList = localStorage.getItem(key);
        try {
            return getList !== null ? JSON.parse(getList) : []
        } catch {}
    };

    addData = (todos) => {
        try {
            this.setLocalStorage(todos)
            this.setState(todos)
        } catch (err) {
            console.log(err)
        }
    }

    removeData = (todos) => {
        try {
            this.setLocalStorage(todos)
            this.setState(todos)
        } catch (err) {
            console.log(err)
        }
    }

    removeAllTodos = () => {
        console.log('removeaALL')
        this.todos = [];
        this.render(this.todos);
    }

    setState = (nextData) => {
        nextData = validate(nextData)
        this.todoList.setState(nextData)
        this.todoCount.setState(nextData);
    }

    render() {
        this.todoList.render();
    }
}
