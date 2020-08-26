export function validateList(todoList, todoDataType) {
    function propertyCheck(todos) {
        todos.some(todo => {
            if(typeof todo.text !== 'string'
            && typeof todo.isCompleted !== 'boolean') {
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

export function showError(param) {
    const paragraph = document.createElement('p');
    paragraph.textContent = `Invalid value. Please check your ${param} parameter`;
    document.querySelector('#error-text').append(paragraph);
}
