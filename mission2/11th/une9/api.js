const BASE_URL =  'https://todo-api.roto.codes';

export async function loadTodo(username) {
    const API_URL = BASE_URL + '/' + username;
    console.log(API_URL)

    try {
        const response = await fetch(API_URL);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.status, 'error');
        }
    } catch (error) {
        throw new Error(error);
    }

}

export async function addTodo(username, text) {
    const API_URL = BASE_URL + '/' + username;
    console.log(API_URL)

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                content: text
            })
        });
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.status, 'error');
        }
    } catch (error) {
        throw new Error(error);
    }

}

export async function deleteTodo(username, id) {
    const API_URL = BASE_URL + '/' + username + '/' + id;
    console.log(API_URL)

    try {
        const response = await fetch(API_URL, {method: 'DELETE'});
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.status, 'error');
        }
    } catch (error) {
        throw new Error(error);
    }
}

export async function toggleTodo(username, id) {
    const API_URL = BASE_URL + '/' + username + '/' + id + '/toggle';
    console.log(API_URL)

    try {
        const response = await fetch(API_URL, {method: 'PUT'});
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.status, 'error');
        }
    } catch (error) {
        throw new Error(error);
    }
}
