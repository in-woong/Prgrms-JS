export const getTodoList = async (username) => {
    return await fetch(`https://todo-api.roto.codes/${username}`)
}

export const updateNewTodo = async (username, id) => {
    return await fetch(`https://todo-api.roto.codes/${username}/${id}/toggle`, {
        method: 'PUT',
    })
}

export const removeTodo = async (username, id) => {
    return await fetch(`https://todo-api.roto.codes/${username}/${id}`, {
        method: 'DELETE',
    })
}

export const removeAll = async (username) => {
    return await fetch(`https://todo-api.roto.codes/${username}/all`, {
        method: 'DELETE'
    })
}

export const createNewTodo = async (username, todoText) => {
    return await fetch(`https://todo-api.roto.codes/${username}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: todoText,
        }),
    })
}
