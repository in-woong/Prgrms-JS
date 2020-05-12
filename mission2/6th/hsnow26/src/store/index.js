export function saveTodoInLocalStorage(todo){
    localStorage.setItem('todo', JSON.stringify(todo))
}

export function getTodoInLocalStorage(){
    return localStorage.getItem('todo') === null ? [] : JSON.parse(localStorage.getItem('todo'))
}