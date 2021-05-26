const END_POINT = 'https://todo-api.roto.codes'
const DELAY_MS = '500'

const request = async (url, options) => {
  try {
    const res = await fetch(`${END_POINT}${url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    })

    if (res.ok) {
      const result = await res.json()
      return result
    } else {
      throw new Error(`에러 발생: ${res.status}`)
    }
  } catch (e) {
    throw new Error(`서버 에러 발생: ${e.message}`)
  }
}

export const fetchUsers = async () => await request('/users')

export const fetchTodos = async (userName) => await request(`/${userName}?delay=${DELAY_MS}`)

export const createTodo = async (userName, todoItem) =>
  await request(`/${userName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: todoItem,
    }),
  })

export const deleteTodo = async (userName, todoID) =>
  await request(`/${userName}/${todoID}`, {
    method: 'DELETE',
  })

export const deleteAllTodo = async (userName) =>
  await request(`/${userName}/all`, {
    method: 'DELETE',
  })

export const toggleTodo = async (userName, todoID) =>
  await request(`/${userName}/${todoID}/toggle`, {
    method: 'PUT',
  })
