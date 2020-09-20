const TODO_API = 'https://todo-api.roto.codes';
const USER_API = 'https://todo-api.roto.codes/users ';

const saveTodos = async (url, user, newData) => {
    await fetch(url+'/'+user, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: newData
        })
    })
}

const getTodos = async (url, user) => {
  const res = await fetch(url+'/'+user)
  return await res.json();
}

const deleteTodos = async (url, user, id) => {
    await fetch(`${url}/${user}/${id}`, {
    method: 'DELETE',
  })
}

const toggleTodos = async (url, user, id) => {
    await fetch(`${url}/${user}/${id}/toggle`, {
        method: 'PUT'
    })
}

const getUsers = async(url) => {
    const res = await fetch(url)
    return await res.json();
}

export const getTodo = (user) => getTodos(TODO_API, user);
export const saveTodo = (newData, user) => saveTodos(TODO_API, user, newData);
export const deleteTodo = (id, user) => deleteTodos(TODO_API, user, id);
export const toggleTodo = (id, user) => toggleTodos(TODO_API, user, id);
export const getUser = () => getUsers(USER_API);