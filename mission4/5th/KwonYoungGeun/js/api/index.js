import { BASE_URL } from './config.js'

/**
 * GET /:username
 * @param { Object } params
 * @param { string } params.username
 */
export const fetchTodosByUsername = async params => {
  const res = await fetch(`${BASE_URL}/${params.username}`)
  return await res.json()
}

/**
 * GET /users
 */
export const fetchUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`)
  return await res.json()
}

/**
 * POST /:username
 * @param { Object } params
 * @param { string } params.username
 * @param { Object } request
 * @param { string } request.todoText
 */
export const postTodo = async (params, request) => {
  await fetch(`${BASE_URL}/${params.username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: request.todoText,
    }),
  })
}

/**
 * DELETE /:username/:id
 * @param { Object } params
 * @param { string } params.username
 * @param { string } params.id
 */
export const removeTodo = async params => {
  const { username, id } = params
  await fetch(`${BASE_URL}/${username}/${id}`, {
    method: 'DELETE',
  })
}

/**
 * PUT /:username/:id/toggle
 * @param { Object} params
 * @param { string } params.username
 * @param { string } params.id
 */
export const toggleTodo = async params => {
  const { username, id } = params
  await fetch(`${BASE_URL}/${username}/${id}/toggle`, {
    method: 'PUT',
  })
}
