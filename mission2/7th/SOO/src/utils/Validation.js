export function validate(todoList) {
    if (todoList.some((todoList) => !todoList.text)) {
        throw new Error('⚠️리스트가 완성되지 않았습니다.')
    }
    if (!Array.isArray(todoList)) {
        throw new Error('⚠️list is not Array')
    }
    return todoList
}

export function printError(err) {
    const errorHTML = document.querySelector('.error-message');
    errorHTML.style.display = 'block';
    errorHTML.textContent = `${err}`
}
