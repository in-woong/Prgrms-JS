import {constants} from "../constantValue/constants.js";
import dataFormat from "../data/DataClass.js"

const addTodoList = (event) => {
    event.preventDefault();
    const userInputTodo = document.querySelector("#todo-input").value;
    const $todoList = document.querySelector("#todo-list");
    
    $todoList.innerHTML += `<li class = "todos">${userInputTodo}<button class = "todo-remove-btn">삭제</button></li>`
    
    document.querySelector("#todo-input").value = "";
    addTodoListLocalStorage(userInputTodo);
}

const addTodoListLocalStorage = (todo) => {
    const localStorageTodoElement = localStorage.getItem(constants.LOCALSTORAGE_TO_DO_KEY);

    if(localStorageTodoElement) {
        const localStorageTodoElementArray = JSON.parse(localStorageTodoElement);
        localStorageTodoElementArray.push(new dataFormat(todo, false));
        localStorage.setItem(constants.LOCALSTORAGE_TO_DO_KEY, JSON.stringify(localStorageTodoElementArray))
    } else {
        const localStorageNewArray = [];
        localStorageNewArray.push(new dataFormat(todo, false));
        localStorage.setItem(constants.LOCALSTORAGE_TO_DO_KEY, JSON.stringify(localStorageNewArray));
    }
}

const manageTodoList = (event) => {
    if(event.target.matches(".todo-remove-btn")) {
        const removeTarget = event.target.closest("li");
        const removeTodoContent = removeTarget.childNodes[0];
        removeTarget.remove();
        removeFromLocalStorage(removeTodoContent);
    } else if(event.target.matches(".todos")) {
        // 삭선 처리 토글.
        const completedElement = event.target.childNodes[0];
        completeApplyToLocalStorage(completedElement);
    }
}

const removeFromLocalStorage = (removeElement) => {
    const localStorageTodoElement = localStorage.getItem(constants.LOCALSTORAGE_TO_DO_KEY);
    const localStorageTodoElementArray = JSON.parse(localStorageTodoElement);
    const removeAfterArray = localStorageTodoElementArray.filter(todo => todo.text !== removeElement.data);
    localStorage.setItem(constants.LOCALSTORAGE_TO_DO_KEY, JSON.stringify(removeAfterArray));
}

const completeApplyToLocalStorage = (completedElement) => {
    console.log(completedElement);
    const localStorageTodoElement = localStorage.getItem(constants.LOCALSTORAGE_TO_DO_KEY);
    const localStorageTodoElementArray = JSON.parse(localStorageTodoElement);
    localStorageTodoElementArray.forEach(todo => {
        if(todo.text === completedElement.data){
            todo.isCompleted = true;
        }});
    localStorage.setItem(constants.LOCALSTORAGE_TO_DO_KEY, JSON.stringify(localStorageTodoElementArray));
}

export {addTodoList, manageTodoList};