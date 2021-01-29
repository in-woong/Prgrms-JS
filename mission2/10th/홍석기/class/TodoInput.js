import {addTodoList, manageTodoList} from "../todoInput/handleTodoList.js"

class TodoInput {
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

export {TodoInput};