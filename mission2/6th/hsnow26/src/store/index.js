const TODO_KEY = 'todo'

export function saveTodoInLocalStorage(todo){
    localStorage.setItem(TODO_KEY, JSON.stringify(todo))
}

export function getTodoInLocalStorage(){
    const todos = getJson(TODO_KEY)
    return todos === null ? [] : todos
}

const getJson = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (e){
        console.error(e)
        return []
    }
}