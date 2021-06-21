const BASE_URL =  'https://todo-api.roto.codes';

function createRequestObject(work, username, id, text) {
    if (work === 'add') {
        return {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                content: text
            })
        }
    } else if (work === 'delete') {
        return {method: 'DELETE'};
    } else if (work === 'toggle') {
        return {method: 'PUT'};
    }
}

function createAPIUrl(work, username, id) {
    if (work === 'load' || work === 'add') {
        return `${BASE_URL}/${username}`;
    } else if (work === 'delete') {
        return `${BASE_URL}/${username}/${id}`;
    } else if (work === 'toggle') {
        return `${BASE_URL}/${username}/${id}/toggle`;
    }
}

export async function requestTodoAPI(work, username, id, text) {
    const API_URL = createAPIUrl(work, username, id);
    const requestObject = createRequestObject(work, username, id, text);

    try {
        const response = (work === 'load') ? await fetch(API_URL) : await fetch(API_URL, requestObject);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.status, 'error');
        }
    } catch (error) {
        throw new Error(error);
    }
}
