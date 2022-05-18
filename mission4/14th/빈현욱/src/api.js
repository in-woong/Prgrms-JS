
const API_PATH = 'https://todo-api.roto.codes';

export const getTodoList = async (username, delay = 200) => {
    try{
        const response = await fetch(`${API_PATH}/${username}?delay=${delay}`);
        if(response.ok) return response.json();
        else throw new Error('에러가 발생했습니다.');
    }catch(error){
        console.log(error);
    }
}

export const insertTodo = async (username, value) => {
    try {
        await fetch(`${API_PATH}/${username}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              content: value
            })
          })
    } catch (error) {
        console.log(error);
    }
}

export const deleteTodo = async (username, id) => {
    try{
        await fetch(`${API_PATH}/${username}/${id}`, {method: 'DELETE'});
    }catch(error){
        console.log(error);
    }
}

export const deleteAllTodo = async (username) => {
    try{
        await fetch(`${API_PATH}/${username}/all`, {method: 'DELETE'});
    }catch(error){
        console.log(error);
    }
}

export const updateToggle = async (username, id) => {
    try{
        await fetch(`${API_PATH}/${username}/${id}/toggle`, {method: 'PUT'});
    }catch(error){
        console.log(error);
    }
}

export const getUserList = async () => {
    try{
        const response = await fetch(`${API_PATH}/users`);
        if(response.ok) return response.json();
        else throw new Error('에러가 발생했습니다.');
    }catch(error){
        console.log(error);
    }
}