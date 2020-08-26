const todoListApi = async (currentUser) => {
    const res = await fetch(`https://todo-api.roto.codes/${currentUser}`, {
        method: 'GET',
    })
    return await res.clone().json()
}

const toggleTodoApi = async (currentUser, id) => {
    const res = await
    fetch(`https://todo-api.roto.codes/${currentUser}/${id}/toggle`, {
        method: 'PUT'
    })
    return await res.clone().json()
}

const deleteTodoApi = async (currentUser, id) => {
    const res = await
    fetch(`https://todo-api.roto.codes/${currentUser}/${id}`, {
        method: 'DELETE'
    })
    return await res.clone().json()
}

const todoInputApi = async (currentUser, todoText) => {
    const res = await
    fetch(`https://todo-api.roto.codes/${currentUser}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: todoText,
        }),
    })
    return await res.clone().json()
}

const usersApi = async () => {
    const res = await
    fetch(`https://todo-api.roto.codes/users`, {
        method: 'GET'
    })
    return await res.clone().json()
}

const currentUserApi = async (currentUser, delay) => {
    const res = await
    fetch(`https://todo-api.roto.codes/${currentUser}?delay=${delay}`, {
        method: 'GET',
        delay
    })
    return await res.clone().json()
}

export {
    todoListApi,
    toggleTodoApi,
    deleteTodoApi,
    todoInputApi,
    usersApi,
    currentUserApi
}
