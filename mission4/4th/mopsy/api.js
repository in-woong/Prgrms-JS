const BASE_URL = 'http://todo-api.roto.codes';

const api = {
    getTodos: async username => {
        const result = await fetch(`${BASE_URL}/${username}?delay=1000`);
        const data = await result.json();
        return data;
    },
    addTodo: async (username, content) => {
        const result = await fetch(`${BASE_URL}/${username}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ content })
        });
        const data = await result.json();
        return data;
    },
    removeTodo: async (username, _id) => {
        const result = await fetch(`${BASE_URL}/${username}/${_id}`, {
            method: 'DELETE'
        });
        const data = await result.json();
        return data;
    },
    toggleTodo: async (username, _id) => {
        const result = await fetch(`${BASE_URL}/${username}/${_id}/toggle`, {
            method: 'PUT'
        });
        const data = await result.json();
        return data;
    },
    getUsers: async () => {
        const result = await fetch(`${BASE_URL}/users?delay=1000`);
        const data = await result.json();
        return data;
    }
};

export default api;
