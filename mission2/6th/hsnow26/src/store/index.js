const TODO_KEY = 'todo'

export function saveTodoInLocalStorage(todo){
    localStorage.setItem(TODO_KEY, JSON.stringify(todo))
}

export function getTodoInLocalStorage(){
    return localStorage.getItem(TODO_KEY) === null ? [] : JSON.parse(localStorage.getItem(TODO_KEY))
}