import { TODOS } from './data.js';

export function validateList(todoList) {
    function propertyCheck(todos) {
        return todos.some(({text, isCompleted}) => {
            if(typeof text !== 'string'
            && typeof isCompleted !== 'boolean') {
                return true;
            }
            return false;
        })
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
    const paragraph = document.createElement('p');
    paragraph.textContent = `Invalid value. ${err}`;
    document.querySelector('#error-text').append(paragraph);
}

export const initTodo = () => {
    try {
        const todos = localStorage.getItem(TODOS);
        return todos && todos.length > 0 ? JSON.parse(todos) : [];
    } catch(err) {
        console.error(err);
    }
}

export function createUniqueId() {
    return Date.now();
}

export function saveTodosInLS(todos) {
    localStorage.setItem(TODOS, JSON.stringify(todos));
}
