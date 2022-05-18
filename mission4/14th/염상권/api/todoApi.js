import API from './api.js';

const useApi = async ({ method, user, content = '', id = '' }) => {

    const makeParam = () => {
        switch (method) {
            case 'get':
                return { path: `${user}` }
            case 'post':
                return { path: user, content }
            case 'put':
                return { path: `${user}/${id}/toggle` }
            case 'delete':
                if (Boolean(id)) return { path: `${user}/${id}` }
                return { path: `${user}/all` }
            default:
                throw new Error('잘못된 method 입니다.');
        }
    }

    try {
        const response = await API[method](makeParam());
        return response;
    } catch (e) {
        console.error(e);
    }
}

export const TODO_API = {
    fetchTodo: async ({ user }) => {
        return useApi({ method: 'get', user });
    },

    addTodo: async ({ user, content }) => {
        return useApi({ method: 'post', user, content });
    },

    removeTodo: async ({ user, id }) => {
        return useApi({ method: 'delete', user, id });
    },

    removeAllTodo: async ({ user }) => {
        return useApi({ method: 'delete', user });
    },
    
    toggleTodo: async ({ user, id }) => {
        return useApi({ method: 'put', user, id });
    }
}
