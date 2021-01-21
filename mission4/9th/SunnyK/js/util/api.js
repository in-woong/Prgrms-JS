const END_POINT = 'https://todo-api.roto.codes'
const DELAY_MS = 2000

export const fetchTodos = async (userName) => {
  const response = await fetch(`${END_POINT}/${userName}?delay=${DELAY_MS}`)

  return response.ok ? await response.json() : 'error'
}

export const addTodo = async (userName, todoText) => {
  const response = await fetch(`${END_POINT}/${userName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: todoText,
    }),
  })

  return response.ok
}

export const deleteTodo = async (userName, todoId) => {
  const response = await fetch(`${END_POINT}/${userName}/${todoId}`, {
    method: 'DELETE',
  })

  return response.ok
}

export const deleteAllTodo = async (userName) => {
  const response = await fetch(`${END_POINT}/${userName}/all`, {
    method: 'DELETE',
  })

  return response.ok
}

export const toggleTodo = async (userName, todoId) => {
  const response = await fetch(`${END_POINT}/${userName}/${todoId}/toggle`, {
    method: 'PUT',
  })

  return response.ok
}

export const fetchUsers = async () => {
  const response = await fetch(`${END_POINT}/users`)

  return response.ok ? await response.json() : 'error'
}
