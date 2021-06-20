const API_ENDPOINT = 'https://todo-api.roto.codes'

const option = {
  post: (contents) => ({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contents),
  }),

  delete: () => ({
    method: 'DELETE',
  }),

  put: (contents) => ({
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contents),
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
  loadTodo: (userName) => {
    return request(`${API_ENDPOINT}/${userName}`)
  },
  addUserTodo: (contents, userName) => {
    return request(`${API_ENDPOINT}/${userName}`, option.post(contents))
  },
}
