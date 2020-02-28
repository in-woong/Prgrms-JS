import { BASE_URL } from './config.js'
import { errorHandler } from '../error/index.js'

/**
 * GET /:username
 * @param { Object } params
 * @param { string } params.username
 */
export const fetchTodosByUsername = async params => {
  try {
    const res = await fetch(`${BASE_URL}/${params.username}/`)
    return await res.json()
  } catch (error) {
    console.dir(response)
    errorHandler(error)
  }
}

/**
 * GET /users
 */
export const fetchUsers = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users`)
    return await res.json()
  } catch (error) {
    errorHandler(error)
  }
}

/**
 * POST /:username
 * @param { Object } params
 * @param { string } params.username
 * @param { Object } request
 * @param { string } request.todoText
 */
export const postTodo = async (params, request) => {
  try {
    await fetch(`${BASE_URL}/${params.username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: request.todoText,
      }),
    })
  } catch (error) {
    console.dir(response)
    errorHandler(error)
  }
}

/**
 * DELETE /:username/:id
 * @param { Object } params
 * @param { string } params.username
 * @param { string } params.id
 */
export const removeTodo = async params => {
  try {
    const { username, id } = params
    await fetch(`${BASE_URL}/${username}/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    errorHandler(error)
  }
}

/**
 * PUT /:username/:id/toggle
 * @param { Object} params
 * @param { string } params.username
 * @param { string } params.id
 */
export const toggleTodo = async params => {
  try {
    const { username, id } = params
    await fetch(`${BASE_URL}/${username}/${id}/toggle`, {
      method: 'PUT',
    })
  } catch (error) {
    errorHandler(error)
  }
}
