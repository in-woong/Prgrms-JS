import {message} from "../constantValue/message.js";
import {constants} from "../constantValue/constants.js";

class TodoList {
    constructor($todoId, toDoListTitle) {
        this.dataSet();
        this.render();
    }

    dataSet() {
        const localStorageTodoElement = localStorage.getItem(constants.LOCALSTORAGE_TO_DO_KEY);
        if(localStorageTodoElement) {
            const localStorageTodoElementArray = JSON.parse(localStorageTodoElement);
            this.todoData = localStorageTodoElementArray;
        }
    }

    render() {
        const localStorageTodoElement = localStorage.getItem(constants.LOCALSTORAGE_TO_DO_KEY);
        const $todoList = document.querySelector("#todo-list");
        
        if(localStorageTodoElement) {
            const localStorageTodoElementArray = JSON.parse(localStorageTodoElement);
            const todoListHTMLString = localStorageTodoElementArray.map((todoData, index) => {
                return todoData.isCompleted
                ? `<li class = "todos"><s>${todoData.text}</s><button class = "todo-remove-btn">삭제</button></li>` 
                : `<li class = "todos">${todoData.text}<button class = "todo-remove-btn">삭제</button></li>`
            }).join("");
    
            $todoList.innerHTML = todoListHTMLString;
        }
    }
}

export {TodoList};
