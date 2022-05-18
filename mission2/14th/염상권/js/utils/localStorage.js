import { checkValidate } from "./isDataValid.js";

const validateData = ({ todos }) => {
    const { isValid } = checkValidate({ todos });

    if (!todos || !isValid) return false;
    else return true;
}

export const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todos"));
}

export const setLocalStorage = ({ todos }) => {
    localStorage.setItem("todos", JSON.stringify(todos));
}

export const initLocalStorage = () => {
    const todos = getLocalStorage();

    const arr = [];

    if (!validateData({ todos })) localStorage.setItem("todos", JSON.stringify(arr));
}

