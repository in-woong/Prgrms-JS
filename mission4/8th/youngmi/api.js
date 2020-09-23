const todo_api = 'https://todo-api.roto.codes';

export const getTodos = async (name) => {
    const res =  await fetch(`${todo_api}/${name}`)
    return await res.json();
}

export const addTodo = async (newTodo) => {
    await fetch(`${todo_api}/youngmi`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: newTodo.text
        })
    })
}

export const deleteTodo = async(deleteId) => {
    // console.log(deleteId);
    await fetch(`https://todo-api.roto.codes/youngmi/${deleteId}`, {
        method: 'DELETE'
      })
}

export const deleteAll = async(deleteAll) => {
    fetch('https://todo-api.roto.codes/youngmi/all', {
        method: 'DELETE'
    })
}

// export const toggleTodo = async(user,id) => {
export const toggleTodo = async(id) => {
    fetch(`https://todo-api.roto.codes/youngmi/${id}/toggle`, {
        method: 'PUT'
    })
}




//왜 export default {addTodo,} 이런식으로하면 undefined??