const End_Point = 'https://todo-api.roto.codes/'

//API 호출 및 에러 처리
const request = async (url, options) => {
    try {
        const res = await fetch(`${End_Point}${url}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            ...options
        })
        if (res.ok) {
            return res.json()
        } else {
            throw new Error(`뭔가 잘못 되었습니다! status code: ${res.status}`)
        }
    } catch (error) {
        throw new Error(`서버 통신 중 에러 발생: ${e.message}`)
    }
}

export const getTodoList = async (username) => {
    return await request(username)
}

export const updateNewTodo = async (username, id) => {
    return await request(`${username}/${id}/toggle`, {
        method: 'PUT'
    })
}

export const removeTodo = async (username, id) => {
    return await request(`${username}/${id}`, {
        method: 'DELETE'
    })

}

export const removeAll = async (username) => {
    return await request(`${username}/all`, {
        method: 'DELETE'
    })
}

export const createNewTodo = async (username, todoText) => {
    return await request(`${username}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: todoText,
        }),
    })
}
