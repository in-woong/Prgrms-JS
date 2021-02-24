const BAES_URL = "https://todo-api.roto.codes"


const requestRead = (username) => {
    return fetch(`${BAES_URL}/${username}?delay=1000`)
        .then(x => x.json())
        .then(data => {
            return data
        })
        .catch((error) => {
            console.log(error);
        })
}

const requestUserRead = () => {
    return fetch(`${BAES_URL}/users`)
        .then(x => x.json())
        .then(data => {
            return data
        })
        .catch((error) => {
            console.log(error);
        })
}

const requestUpdate = (id, username) => {
    return fetch(`${BAES_URL}/${username}/${id}/toggle`, {
            method: 'PUT',
        })
        .then(x => x.json())
        .then(data => {
            return data
        })
        .catch((error) => {
            console.log(error);
        })
}

const requestCreate = (todoText, username) => {
    return fetch(`${BAES_URL}/${username}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: todoText,
            }),
        })
        .then(x => x.json())
        .then(data => {
            return data
        })
        .catch((error) => {
            console.log(error);
        })
}

const requestDelete = (id, username) => {
    return fetch(`${BAES_URL}/${username}/${id}`, {
            method: 'DELETE',
        })
        .then(x => x.json())
        .then(data => {
            return data
        })
        .catch((error) => {
            console.log(error);
        })
}


const ExecuteApi = () => {
    return {
        requestRead: requestRead,
        requestUpdate: requestUpdate,
        requestCreate: requestCreate,
        requestDelete: requestDelete,
        requestUserRead: requestUserRead,
    }
}


export default ExecuteApi;