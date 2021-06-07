import { TodoList } from './TodoList.js';
import { TodoInput } from './TodoInput.js';

export class App {
    constructor($app) {
        this.$app = $app;
        this.todoLists = [];
        this.todoInputs = [];

        this.$app.addEventListener('removeAll', () => {
            this.todoLists.forEach(todolist => todolist.setState([]));
        });
    }

    addTodoList(data) {
        const todoList = new TodoList(this.$app, data);
        const todoInput = new TodoInput(app, todoList);

        this.todoLists.push(todoList);
        this.todoInputs.push(todoInput);
    }
}
