const END_POINT = "https://todo-api.roto.codes"

export const request = async(url, method) => {
    try {
        const response = await fetch(url, method);
        if(!response.ok) {
            throw Error("There was a problem in requesting http.");
        }
        return await response.json();        
    } catch(e) {
        alert(e.message);
    }
}

export const fetchTodo = async(user) => {
    return await request(`${END_POINT}/${user}`);
}

export const inputTodo = async(user, todoText) => {
    return await request(`${END_POINT}/${user}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: todoText
        })
    })
}

export const deleteTodo = async(user, id) => {
    return await request(`${END_POINT}/${user}/${id}`, {
        method: 'DELETE'
    });
}

export const deleteAll = async(user) => {
    return await request(`${END_POINT}/${user}/all`, {
        method: 'DELETE'
    })
}

export const toggleTodo = async(user, id) => {
    return await request(`${END_POINT}/${user}/${id}/toggle`, {
        method: 'PUT'
    })
}

export const fetchUsers = async() => {
    return await request(`${END_POINT}/users`);
}