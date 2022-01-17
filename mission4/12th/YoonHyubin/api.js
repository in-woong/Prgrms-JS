import { setLoading, checkReadOnly, isInvalidString, getUserName } from './system.js';

const rootUri = 'https://todo-api.roto.codes';
var isDisabled = false;

function request({ subUri, init }) {
    if (init.method !== 'GET') {
        checkReadOnly();
    }
    const uri = `${rootUri}/${subUri || ''}`;
    return fetch(uri, init)
        .then(response => response.json())
        .catch(e => {
            console.log(e)
        });
}

export async function fetchData() {
    setLoading(true);

    const data = await request({
        subUri: `${getUserName()}?delay=300`,
        init: {
            method: 'GET'
        }
    });

    setLoading(false);
    return data;
}

export async function toggleTodo(todoId) {
    await request({
        subUri: `${getUserName()}/${todoId}/toggle`,
        init: {
            method: 'PUT'
        }
    });
}

export async function deleteTodo(todoId) {
    await request({
        subUri: `${getUserName()}/${todoId}`,
        init: {
            method: 'DELETE'
        }
    });
}

export async function insertTodo(todoText) {
    if (isInvalidString(todoText)) makeError("todoText값이 정상적인 문자열이 아닙니다.");

    await request({
        subUri: `${getUserName()}`,
        init: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: todoText,
            }),
        }
    });
}

export async function deleteAllTodos() {
    await request({
        subUri: `${getUserName()}/all`,
        init: {
            method: 'DELETE'
        }
    });
}

export async function getUsers() {
    const data = await request({
        subUri: `users`,
        init: {
            method: 'GET'
        }
    });
    return data;
}
