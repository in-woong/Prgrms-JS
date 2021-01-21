const END_POINT = 'https://todo-api.roto.codes';

const request = async (url, options) => {
  try {
    const res = await fetch(`${END_POINT}${url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options
    });

    if(res.ok) {
      return await res.json();
    } else {
      throw new Error('fetch is not ok')
    }
  } catch (e) {
    throw new Error('something is wrong')
  }
}

export const fetchTodoList = async (username) => await request(`/${username}?delay=3000`)

export const addTodo = async (username, todoContent) => await request(`/${username}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    content: todoContent
  })
})

export const removeTodo = async (username, todoId) => await request(`/${username}/${todoId}`, {
  method: 'DELETE'
})

export const toggleTodo = async (username, todoId) => await request(`/${username}/${todoId}/toggle`, {
  method: 'PUT'
})

export const fetchUsers = async () => await request(`/users`);