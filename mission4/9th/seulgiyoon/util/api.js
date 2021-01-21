const BASE_URL = 'https://todo-api.roto.codes'

const headers = {
  'Content-Type': 'application/json',
}

const request = async ({ url, params = {} }) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, params)

    if (response.ok) {
      return await response.json()
    }
    throw new Error()
  } catch (error) {
    alert('서버와의 통신이 원활하지 않습니다.')
  }
}

export const getTodoList = async (username) => {
  return await request({ url: username })
}

export const addTodo = async (username, body) => {
  return await request({
    url: username,
    params: {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    },
  })
}

export const removeTodo = async (username, id) => {
  return request({ url: `${username}/${id}`, params: { method: 'DELETE' } })
}

export const removeAllTodo = async (username) => {
  return request({ url: `${username}/all`, params: { method: 'DELETE' } })
}

export const toggleTodo = async (username, id) => {
  return request({ url: `${username}/${id}/toggle`, params: { method: 'PUT' } })
}

export const getUserList = async () => {
  return request({ url: `users` })
}
