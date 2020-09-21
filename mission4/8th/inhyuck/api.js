const END_POINT = 'https://todo-api.roto.codes';
const USER_NAME = 'inhyuck';

const defaultApi = {
    get: async ({path}) => {
        const res = await fetch(`${END_POINT}${path}`);
        return await res.json();
    },

    post: async ({path, body}) => {
        const res = await fetch(`${END_POINT}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
        return await res.json();
    },

    delete: async ({path}) => {
        const res = await fetch(`${END_POINT}${path}`, {
            method: 'DELETE',
        });
        return await res.json();
    },
};

export async function fetchTodoItems() {
    const fetchedTodoItems = await defaultApi.get({path: `/${USER_NAME}`});
    return fetchedTodoItems.map(todoItem => {
        return {
            id: todoItem._id,
            text: todoItem.content,
            isCompleted: todoItem.isCompleted,
        };
    });
}

/**
 * @param {string} text
 * @param {boolean} isCompleted
 */
export async function addTodoItem({text, isCompleted}) {
    const newTodoItem = await defaultApi.post({
        path: `/${USER_NAME}`,
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

export async function removeTodoItem({todoId}) {
    const {message} = await defaultApi.delete({path: `/${USER_NAME}/${todoId}`});
    console.log(message);
}

export async function removeAllTodoItems() {
    const {message} = await defaultApi.delete({path: `/${USER_NAME}/all`});
    console.log(message);
}
