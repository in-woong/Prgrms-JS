export const fetchData = async (name) => {
    const data = await fetch(`https://todo-api.roto.codes/${name}?delay=1000`)
        .then( async (res) => {
            return await res.json()
        })
    return data
}

export const addData = async (name, todo) => {
    await fetch(`https://todo-api.roto.codes/${name}?delay=1000`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: todo
        })
    })
}

export const removeTodo = async (name, id) => {
    await fetch(`https://todo-api.roto.codes/${name}/${id}?delay=1000`, {
        method: 'DELETE'
    })
}

export const changeTodoStatus = async (name, id) => {
    await fetch(`https://todo-api.roto.codes/${name}/${id}/toggle?delay=1000`, {
        method: 'PUT'
    })
}

export const removeAll = async (name) => {
    await fetch(`https://todo-api.roto.codes/${name}/all?delay=1000`, {
        method: 'DELETE'
    })
}

export const fetchUsers = async () => {
    const users = await fetch('https://todo-api.roto.codes/users?delay=1000')
        .then( async (res) => {
            return await res.json()
        })
    return users
}
