import { $ } from "../utils/index.js";

const API_ROOT = ({ path }) => `https://todo-api.roto.codes/${path}`;

const returnOptions = ({ method, content }) => {

    if (method === 'POST') {
        return {
            method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({ content }),
        };
    }

    return { method };
}

const useFetch = async ({ path, method, content = '' }) => {
    const $loader = $({ selector: '.loader' });
    try {
        $loader.style.display = 'block';
        const response = await fetch(API_ROOT({ path }), returnOptions({ method, content }));

        if (!response || !response.ok) {
            throw Error(response.status);
        }

        return await response.json();

    } catch (e) {
        console.error(e);
    }
}

const API = {
    get: async ({ path }) => { 
        return await useFetch({ path, method: 'GET' });
    },

    post: async ({ path, content }) => { 
        return await useFetch({ path, method: 'POST', content });
    },

    put: async ({ path }) => { 
        return await useFetch({ path, method: 'PUT' });
    },

    delete: async ({ path }) => {
        return await useFetch({ path, method: 'DELETE' });
    }
}

export default API;
