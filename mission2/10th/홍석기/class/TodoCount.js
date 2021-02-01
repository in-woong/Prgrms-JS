import {constants} from "../constantValue/constants.js";

export default class TodoCount {
    constructor() {
        this.countTodosFromLocalStorage();
    }

    countTodosFromLocalStorage() {
        const localStorageTodoElement = localStorage.getItem(constants.LOCALSTORAGE_TO_DO_KEY);
        if(localStorageTodoElement){
            const localStorageTodoElementArray = JSON.parse(localStorageTodoElement);
            let inProgress = 0;
            let isCompleted = 0;
            localStorageTodoElementArray.forEach(todo => {
                todo.isCompleted ? isCompleted++ : inProgress++;
            })
            this.printTodos(inProgress, isCompleted, localStorageTodoElementArray.length);
        }
    }

    printTodos(inProgress, isCompleted, total) {
        const $todoCount = document.querySelector("#todo-count");
        const todoCountHTML = `진행 중: ${inProgress}개 | 완료: ${isCompleted}개 | 총: ${total}개`;
        $todoCount.innerHTML = todoCountHTML;
    }
}