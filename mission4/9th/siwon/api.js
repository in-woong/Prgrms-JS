import LoadingView from './loading.js';

const END_POINT = 'https://todo-api.roto.codes';

const request = async (url, option = {}) => {
    try {
        const res = await fetch(`${END_POINT}/${url}`, option);
        if (res.ok) {
            return await res.json();
        }

        throw new Error('API 요청에 문제가 있습니다');
    } catch(e) {
        //alert(e.message);
    }
}

export const fetchUsers = async () => {
    return await request('users');
}

export const fetchTodoList = async (user) => {
    // #190 미니트렐로를 위해 delay는 잠시 숨김
    // return await request(`${user}?delay=2000`);
    return await request(`${user}`);
}

export const fetchAddTodo = async (user, todoData) => {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: todoData
        })
    }
    return await request(user, option);
}

export const fetchDeleteTodo = async (user, _id) => {
    const option = {
        method: 'DELETE'
    }
    return await request(`${user}/${_id}`, option);
}

export const fetchDeleteAllTodo = async (user) => {
    const option = {
        method: 'DELETE'
    }
    return await request(`${user}/all`, option);
}

export const fetchToggle = async (user, _id) => {
    const option = {
        method: 'PUT'
    }
    return await request(`${user}/${_id}/toggle`, option);
}
