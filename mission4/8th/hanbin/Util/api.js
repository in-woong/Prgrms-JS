const BASE_API = 'https://todo-api.roto.codes/';

const request = async (url, options) => {
    try{
        const res = await fetch(`${BASE_API}${url}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            ...options
        })

        if(res.ok){
            const result = await res.json();

            return result;
        } else {
            throw new Error(`뭔가 잘못 되었습니다! status code: ${res.status}`)
        }
    } catch(e) {
        throw new Error(`서버 통신 중 에러 발생: ${e.message}`);
    }
}

export const getTodos = async (userName) =>  await request(`${userName}`);

export const postTodo = async (userName, todoText) => {
    await request(`${userName}?delay=1000`, {
        method: 'POST',
        body: JSON.stringify({
            content: todoText
        })
    });
}

export const deleteTodo = async (userName, todoId) => {
    await request(`${userName}/${todoId}`, {
        method: 'DELETE'
    });
}

export const removeAll = async (userName) => {
    await request(`${userName}/all`, {
        method: 'DELETE'
    })
}

export const toggleIsCompleted = async (userName, todoId) => {
    await request(`${userName}/${todoId}/toggle`, {
        method: 'PUT'
    });
}

export const getUsers = async () => await request(`users`);
