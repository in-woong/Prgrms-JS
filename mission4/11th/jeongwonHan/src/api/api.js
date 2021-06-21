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
  put: () => ({
    method: 'PUT',
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
  addUserTodo: (content, userName) => {
    return request(`${API_ENDPOINT}/${userName}`, option.post(content))
  },
  deleteUserTodo:(userName, todoId) => {
    return request(`${API_ENDPOINT}/${userName}/${todoId}`, option.delete())
  },
  deleteAllUserTodo:(userName) => {
    return request(`${API_ENDPOINT}/${userName}/all`, option.delete())
  },
  toggleUserTodo: (userName, todoId) =>{
    return request(`${API_ENDPOINT}/${userName}/${todoId}/toggle`, option.put())
  },
  getUserList: () => {
    return request(`${API_ENDPOINT}/users`)
  },
}
