import TodoList from "./class/TodoList.js";
import TodoInput from "./class/TodoInput.js";
import TodoCount from "./class/TodoCount.js"
import {constants} from "../constantValue/constants.js";

class App {
    constructor() {
        new TodoList();
        new TodoInput();
        new TodoCount();
        this.setRemoveAllBtn();
    }

    setRemoveAllBtn() {
        const $removeAllBtn = document.querySelector("#todo-remove-all");
        const $todoList = document.querySelector("#todo-list");
        $removeAllBtn.addEventListener("click", () => {
            const localStorageTodoElement = localStorage.getItem(constants.LOCALSTORAGE_TO_DO_KEY);
            const localStorageTodoElementArray = JSON.parse(localStorageTodoElement);
            localStorageTodoElementArray.length = 0;
            localStorage.setItem(constants.LOCALSTORAGE_TO_DO_KEY, JSON.stringify(localStorageTodoElementArray));
            $todoList.innerHTML = "";
        }, false)
    }
}

new App();