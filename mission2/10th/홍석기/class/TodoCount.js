import {constants} from "../constantValue/constants.js";

export default class TodoCount {
    constructor() {
        this.countTodosFromLocalStorage();
    }

    countTodosFromLocalStorage() {
        const localStorageTodoElement = localStorage.getItem(constants.LOCALSTORAGE_TO_DO_KEY);
        try{
            const localStorageTodoElementArray = JSON.parse(localStorageTodoElement);
            this.renderTodos(localStorageTodoElementArray.filter(todo =>  !todo.isCompleted).length, 
            localStorageTodoElementArray.filter(todo =>  todo.isCompleted).length, 
            localStorageTodoElementArray.length);
        } catch(e) {
            console.log("Initial State. There is no local Storage data.")
        }
    }

    renderTodos(inProgress, isCompleted, total) {
        const $todoCount = document.querySelector("#todo-count");
        const todoCountHTML = `진행 중: ${inProgress}개 | 완료: ${isCompleted}개 | 총: ${total}개`;
        $todoCount.innerHTML = todoCountHTML;
    }
}