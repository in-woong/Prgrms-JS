import TodoList from './TodoList.js';
import TodoCount from './TodoCount.js';
import TodoInput from './TodoInput.js';

export default function App() {
    this.data = [];
    this.dataKey = 'todoList';

    this.init = function () {
        this.todoList = new TodoList(this.data, {
            toggleItem: this.toggleItem,
            removeItem: this.removeItem,
            removeAllItem: this.removeAllItem,
        });
        this.todoCount = new TodoCount(this.data);
        this.todoInput = new TodoInput(this.addItem);

        this.getStorage();
        this.setState();
    };

    this.getStorage = function () {
        const todoListStorage = localStorage.getItem(this.dataKey) || '[]';
        this.data = JSON.parse(todoListStorage);
    };

    this.setStorage = function () {
        localStorage.setItem(this.dataKey, JSON.stringify(this.data));
    };

    this.setState = function () {
        this.todoList.setState(this.data);
        this.todoCount.setState(this.data);
    };

    this.addItem = (inputText) => {
        this.data.push({
            text: inputText,
            isCompleted: false,
        });

        this.setStorage();
        this.setState();
    };

    this.toggleItem = (index) => {
        this.data[index].isCompleted = !this.data[index].isCompleted;

        this.setStorage();
        this.setState();
    };

    this.removeItem = (index) => {
        this.data.splice(index, 1);

        this.setStorage();
        this.setState();
    };

    this.removeAllItem = () => {
        this.data.splice(0, this.data.length);

        this.setStorage();
        this.setState();
    };

    this.init();
}
