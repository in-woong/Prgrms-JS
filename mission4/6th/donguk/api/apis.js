import { API_URL } from '../utils/constants.js'

export const postTodo = async (userName, content) => {
  const response = await fetch(`${API_URL}/${userName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  })
  return response
}

export const getTodos = async (userName) => {
  const response = await fetch(`${API_URL}/${userName}`)
  const result = await response.json()
  return result
}
