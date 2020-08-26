export const getUserTodoList = async ({
    currentUser,
    delay
}) => {
    const response = await fetch(`https://todo-api.roto.codes/${currentUser}?delay=${delay}`);
    const result = await response.json();
    return result;
}

export const addUserTodoList = async ({
    todo,
    currentUser
}) => {
    await fetch(`https://todo-api.roto.codes/${currentUser}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(todo)
    })
    .catch(err => console.error(err));
}

export const deleteUserTodoList = async ({
    _id,
    currentUser
}) => {
    return await fetch(`https://todo-api.roto.codes/${currentUser}/${_id}`, {
        method: 'DELETE'
    });
}

/*export const deleteAllUserTodoList = async ({
    todoList,
    currentUser
}) => {
    await Promise.all(todoList.map(async ({
        _id
    }) => {
        await deleteUserTodoList({
            _id,
            currentUser
        });
    }))
    .catch(err => console.error(err));
}*/

export const deleteAllUserTodoList = async (currentUser) => {
    await fetch(`https://todo-api.roto.codes/${currentUser}/all`, {
        method: 'DELETE'
    })
    .catch(err => console.error(err));
}

export const toggleUserTodoList = async ({
    _id,
    currentUser
}) => {
    await fetch(`https://todo-api.roto.codes/${currentUser}/${_id}/toggle`, {
        method: 'PUT'
    })
    .catch(err => console.error(err));
}

export const getAllUserList = async () => {
    const response = await fetch(`https://todo-api.roto.codes/users`)
    const result = await response.json();
    return result;
}
