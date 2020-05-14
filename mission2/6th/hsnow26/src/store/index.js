const TODO_KEY = 'todo'

export function saveTodoInLocalStorage(todo){
    localStorage.setItem(TODO_KEY, JSON.stringify(todo))
}

export function getTodoInLocalStorage(){
    return localStorage.getItem(TODO_KEY) === null ? [] : getJsonParseWithKey(TODO_KEY)
}

const getJsonParseWithKey = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (e){
        console.error(e)
        return ''
    }
}