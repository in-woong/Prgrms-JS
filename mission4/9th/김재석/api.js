export function addTodo_api(user, todo) {
    try{
       return  fetch(`https://todo-api.roto.codes/${user}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: todo
            })
        })
    } catch(e) {
        console.log(e)
    }
}

export async function loadTodo_api(user){
    try{
        const rawdata = await fetch(`https://todo-api.roto.codes/${user}?delay=2000`)
        const todoData = await rawdata.json()
        return todoData
    } catch(e) {
        console.log(e)
    }
}

export function deleteTodo_api(user, todo_id){
    try{
        return fetch(`https://todo-api.roto.codes/${user}/${todo_id}`, {
            method: 'DELETE'
        })
    } catch(e) {
        console.log(e)
    }
   
}

export function toggleComplete_api(user, todo_id){
    try{
        return fetch(`https://todo-api.roto.codes/${user}/${todo_id}/toggle`, {
            method: 'PUT'
        })
    } catch(e) {
        console.log(e)
    }
    
}

export async function getUserList_api(){
    try{
        const rawdata = await fetch('https://todo-api.roto.codes/users')
        const userList = await rawdata.json()
        return userList
    } catch(e) {
        console.log(e)
    }
    
}