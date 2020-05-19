import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import TodoInput from './TodoInput.js';
import { validateData } from './validator.js';

export default function App() {
    this.TODO_STORAGE_KEY = 'todoList';
    this.data = [];

    this.init = function () {
        this.todoList = new TodoList(this.data, {
            toggleItem: this.toggleItem,
            removeItem: this.removeItem,
            removeAllItem: this.removeAllItem,
        });
        this.todoCount = new TodoCount(this.getTodoCount());
        this.todoInput = new TodoInput(this.addItem);

        this.getStorage();
        this.setState(this.data);
    };

    this.getStorage = function (defaultValue = []) {
        try {
            const todoListStorage = localStorage.getItem(this.TODO_STORAGE_KEY);
            this.data = JSON.parse(todoListStorage);
        } catch (e) {
            alert(e.message);
            return defaultValue;
        }
    };

    this.syncStorage = function () {
        localStorage.setItem(this.TODO_STORAGE_KEY, JSON.stringify(this.data));
    };

    this.setState = function (nextData) {
        this.data = validateData(nextData) && nextData;

        this.todoList.setState(this.data);
        this.todoCount.setState(this.getTodoCount());
    };

    this.getTodoCount = () => {
        return {
            totalCount: this.data.length,
            completedCount: this.data.filter(todoItem => todoItem.isCompleted).length,
        }
    };

    this.addItem = (inputText) => {
        this.data.push({
            text: inputText,
            isCompleted: false,
        });

        this.syncStorage();
        this.setState(this.data);
    };

    this.toggleItem = (index) => {
        this.data[index].isCompleted = !this.data[index].isCompleted;

        this.syncStorage();
        this.setState(this.data);
    };

    this.removeItem = (index) => {
        this.data.splice(index, 1);

        this.syncStorage();
        this.setState(this.data);
    };

    this.removeAllItem = () => {
        this.data = [];

        this.syncStorage();
        this.setState(this.data);
    };

    this.init();
}
