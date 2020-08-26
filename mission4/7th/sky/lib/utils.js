import { errorTextId } from './data.js';

export function validateList(todoList, todoDataType) {
    function propertyCheck(todos) {
        todos.some(todo => {
            if(typeof todo._id !== todoDataType[0].type
            && typeof todo.content !== todoDataType[1].type
            && typeof todo.isCompleted !== todoDataType[2].type) {
                return false;
            }
            return true;
        });
    }

    if(!todoList || !Array.isArray(todoList) || propertyCheck(todoList)) {
        throw new Error(JSON.stringify(todoList));
    }
}

export function validateTarget(target, id) {
    if(!target && id) {
        throw new Error(id);
    }
    if(!target && !id) {
        throw new Error(target);
    }
}

export function showError(err) {
    const h1 = document.createElement('h1');
    const paragraph = document.createElement('p');
    h1.textContent = `Something is wrong..`;
    paragraph.textContent = `Invalid value. ${err}`;
    document.getElementById(errorTextId).append(h1);
    document.getElementById(errorTextId).append(paragraph);
}

export function createUniqueId() {
    return Date.now();
}
