export const stroageName = 'todo-list'

export const setTodoItem = (key, data) =>{
    try{
        localStorage.setItem(key,JSON.stringify(data))
    }catch(error){
        throw new Error(error)
    }
} 

export const getTodoItem = (key) =>{
    const todoItem = localStorage.getItem(key)
    try{
        if(todoItem){
            return JSON.parse(todoItem)
        }else{
            return []
        }
    }catch(error){
        throw new Error(error)
    }
}
