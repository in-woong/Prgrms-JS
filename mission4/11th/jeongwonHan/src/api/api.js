const API_ENDPOINT = 'https://todo-api.roto.codes'

const option = {
  post: (content) => ({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(content),
  }),

  delete: () => ({
    method: 'DELETE',
  }),

  put: (content) => ({
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(content),
  }),
}

const request = async (url, option = {}) => {
  const response = await fetch(url, option)
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error(response.status)
  }
}

export const api = {
  getUserTodoList: (userName) => {
    return request(`${API_ENDPOINT}/${userName}`)
  },
  deleteUserTodo:(userName, todoId) => {
    return request(`${API_ENDPOINT}/${userName}/${todoId}`, option.delete())
  },
  getUserList: () => {
    return request(`${API_ENDPOINT}/users`)
  },
  addUserTodo: (content, userName) => {
    return request(`${API_ENDPOINT}/${userName}`, option.post(content))
  },
}
