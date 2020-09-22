const END_POINT = 'https://todo-api.roto.codes';

const defaultApi = {
    get: async ({path}) => {
        const res = await fetch(END_POINT + path);
        return await res.json();
    },

    post: async ({path, body}) => {
        const res = await fetch(END_POINT + path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
        return await res.json();
    },

    put: async ({path, body}) => {
        const res = await fetch(END_POINT + path, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
        return await res.json();
    },

    delete: async ({path}) => {
        const res = await fetch(END_POINT + path, {
            method: 'DELETE',
        });
        return await res.json();
    },
};

export async function fetchTodoItems({username}) {
    const randomDelay = getRandomDelay();
    const fetchedTodoItems = await defaultApi.get({path: `/${username}?delay=${randomDelay}`});
    return fetchedTodoItems.map(todoItem => {
        return {
            id: todoItem._id,
            text: todoItem.content,
            isCompleted: todoItem.isCompleted,
        };
    });
}

/**
 * @param {string} username
 * @param {string} text
 * @param {boolean} isCompleted
 */
export async function addTodoItem({username, text, isCompleted}) {
    const newTodoItem = await defaultApi.post({
        path: `/${username}`,
        body: {
            content: text,
            isCompleted: isCompleted,
        },
    });

    return {
        id: newTodoItem.id,
        text: newTodoItem.content,
        isCompleted: newTodoItem.isCompleted,
    };
}

export async function removeTodoItem({username, todoId}) {
    const {message} = await defaultApi.delete({path: `/${username}/${todoId}`});
    console.log(message);
}

export async function removeAllTodoItems({username}) {
    const {message} = await defaultApi.delete({path: `/${username}/all`});
    console.log(message);
}

export async function toggleTodoItem({username,todoId}) {
    const {message} = await defaultApi.put({path: `/${username}/${todoId}/toggle`});
    console.log(message);
}

export async function fetchUsers() {
    return await defaultApi.get({path: '/users'});
}

function getRandomDelay() {
    return Math.floor(Math.random() * 3000);
}
