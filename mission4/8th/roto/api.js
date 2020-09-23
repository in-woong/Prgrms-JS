const END_POINT = 'https://todo-api.roto.codes'

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
      throw new Error(`뭔가 잘못 되었습니다! status code: ${res.status}`)
    }
  } catch (e) {
    throw new Error(`서버 통신 중 에러 발생: ${e.message}`)
  }
}

export const fetchUsers = async () => await request(`/users`)

export const fetchTodos = async (username) =>
  await request(`/${username}?delay=500`)

export const toggleTodo = async (username, id) =>
  await request(`/${username}/${id}/toggle`, {
    method: 'PUT',
  })

export const removeTodo = async (username, id) =>
  await request(`/${username}/${id}`, {
    method: 'DELETE',
  })

export const createTodo = async (username, todoText) =>
  await request(`/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: todoText,
    }),
  })
