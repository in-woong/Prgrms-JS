import {constants} from "../constantValue/constants.js";
import {message} from "../constantValue/message.js";
import dataFormat from "../data/DataClass.js"

const addTodoList = (event) => {
    event.preventDefault();
    const userInputTodo = document.querySelector("#todo-input").value;
    const $todoList = document.querySelector("#todo-list");

    if(userInputTodo.length === 0) {
        alert(message.INPUT_TODO_NULL);
        return;
    }
    
    $todoList.innerHTML += `<li class = "todos">${userInputTodo}<button class = "todo-remove-btn">삭제</button></li>`
    
    document.querySelector("#todo-input").value = "";
    addTodoListLocalStorage(userInputTodo);
}

const addTodoListLocalStorage = (todo) => {
    const localStorageTodoElement = localStorage.getItem(constants.LOCALSTORAGE_TO_DO_KEY);

    try{
        const localStorageTodoElementArray = JSON.parse(localStorageTodoElement);
        localStorageTodoElementArray.push(new dataFormat(todo, false));
        localStorage.setItem(constants.LOCALSTORAGE_TO_DO_KEY, JSON.stringify(localStorageTodoElementArray))
    } catch {
        const localStorageNewArray = [];
        localStorageNewArray.push(new dataFormat(todo, false));
        localStorage.setItem(constants.LOCALSTORAGE_TO_DO_KEY, JSON.stringify(localStorageNewArray));
    }
}

const manageTodoList = (event) => {
    if(event.target.matches(".todo-remove-btn")) {
        const removeTarget = event.target.closest(constants.TAG_INCLUDING_TODO);
        const removeTodoContent = removeTarget.childNodes[constants.INDEX_NTH_IN_CHILDNODES];
        removeTarget.remove();
        removeFromLocalStorage(removeTodoContent);
    } else if(event.target.matches(".todos")) {
        const clickedElement = event.target.childNodes[constants.INDEX_NTH_IN_CHILDNODES].textContent;
        const localStorageTodoElement = localStorage.getItem(constants.LOCALSTORAGE_TO_DO_KEY);
        const localStorageTodoElementArray = JSON.parse(localStorageTodoElement);
        const index = localStorageTodoElementArray.findIndex(todo => todo.text === clickedElement)
        const pickedTodoState = localStorageTodoElementArray[index].isCompleted;
        event.target.classList.toggle(constants.DONE_CLASS);
        pickedTodoState ? handleCompletedInLocalStorage(clickedElement, false) : handleCompletedInLocalStorage(clickedElement, true);
    }
}

const removeFromLocalStorage = (removeElement) => {
    const localStorageTodoElement = localStorage.getItem(constants.LOCALSTORAGE_TO_DO_KEY);
    const localStorageTodoElementArray = JSON.parse(localStorageTodoElement);
    const removeAfterArray = localStorageTodoElementArray.filter(todo => todo.text !== removeElement.data);
    localStorage.setItem(constants.LOCALSTORAGE_TO_DO_KEY, JSON.stringify(removeAfterArray));
}

const handleCompletedInLocalStorage = (clickedElement, state) => {
    const localStorageTodoElement = localStorage.getItem(constants.LOCALSTORAGE_TO_DO_KEY);
    const localStorageTodoElementArray = JSON.parse(localStorageTodoElement);
    localStorageTodoElementArray.forEach(todo => {
        if(todo.text === clickedElement){
            todo.isCompleted = state;
        }});
    localStorage.setItem(constants.LOCALSTORAGE_TO_DO_KEY, JSON.stringify(localStorageTodoElementArray));
}

export {addTodoList, manageTodoList};