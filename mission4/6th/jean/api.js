const BASE_URL = 'https://todo-api.roto.codes'

export const fetchTodos = async (username) => {
  const res = await fetch(`${BASE_URL}/${username}?delay=5000`)
  return await res.json()
}

export const fetchUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`)
  return await res.json()
}

export const addTodo = async (username, todoText) => {
  const res = await fetch(`${BASE_URL}/${username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: todoText,
      })
    })

  return await res.json()
}

export const removeTodo = async (username, id) => {
  const res = await fetch(`${BASE_URL}/${username}/${id}`, {
    method: 'DELETE',
  })

  return await res.json()
}

export const toggleTodo = async (username, id) => {
  const res = await fetch(`${BASE_URL}/${username}/${id}/toggle`, {
    method: 'PUT',
  })

  return await res.json()
}
