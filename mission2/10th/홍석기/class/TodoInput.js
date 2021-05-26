import {addTodoList, manageTodoList} from "../todoInput/handleTodoInputs.js"

export default class TodoInput {
    constructor() {
        this.setTodoInputListener();
        this.setTodoListManageListener();
    }

    setTodoInputListener() {
        const todoInputBtn = document.querySelector("#todo-input-btn");
        todoInputBtn.addEventListener("click", addTodoList);
    }

    setTodoListManageListener() {
        const todoList = document.querySelector("#todo-list");
        todoList.addEventListener("click", manageTodoList);
    }
}