export const API_ENDPOINT = 'https://todo-api.roto.codes'


// data 형태
// {
//     "_id": 할 일의 고유값. 숫자와 문자가 섞여있는 문자로 되어있음,
//     "content": 할 일 text,
//     "isCompleted": 할 일의 완료여부
//   }

export const request = async(url, options) => {
    try {
        const res = await fetch(url, options);

        if (res.ok) {
            return res.json();
        }
    } catch (e) {
        alert(e.message);
    }
}


// 취소가 안됨..
const controller = new AbortController();
const signer = controller.signer;

// 할 일 목록 불러오기
export async function getTodoList(username) {
    controller.abort();
    // ?delay=5000
    return await request(`${API_ENDPOINT}/${username}`, { signer });
}

// 할 일 추가하기
export async function postTodoList(username, content) {
    return await request(`${API_ENDPOINT}/${username}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: content
        })
    });
}

// 할 일 삭제하기
export async function deleteTodoList(username, id) {
    return await request(`${API_ENDPOINT}/${username}/${id}`, {
        method: 'DELETE',
    });
}

// 특정 사용자의 할 일 전체 삭제하기
export async function deleteAllTodoList(username) {
    return await request(`${API_ENDPOINT}/${username}/all`, {
        method: 'DELETE',
    });
}

// 할 일 완료여부 토글하기
export async function putTodoList(username, id) {
    return await request(`${API_ENDPOINT}/${username}/${id}/toggle`, {
        method: 'PUT',
    });
}

// 사용자 목록 받아오기
export async function getUsers() {
    return await request(`${API_ENDPOINT}/users`, {
        method: 'GET',
    });
}