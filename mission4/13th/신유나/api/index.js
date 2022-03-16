import { ERR_MSG } from '../constants/index.js'

const baseURL = 'https://todo-api.roto.codes'

async function reqeust(
  url,
  options = { method: 'GET', headers: null, body: null }
) {
  try {
    const response = await fetch(`${baseURL}${url}`, {
      method: options.method,
      ...(options.headers && { headers: options.headers }),
      ...(options.body && { body: JSON.stringify(options.body) }),
    })
    if (response.ok) {
      return response.json()
    }
    throw new Error(ERR_MSG.API_ERROR)
  } catch (error) {
    throw new Error(ERR_MSG.SERVER_ERROR)
  }
}

const username = 'yunadev'

export const getTodos = (userName) => reqeust(`/${userName}?delay=3000`)

export const addTodo = (content) =>
  reqeust(`/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      content,
    },
  })

export const deleteTodo = (_id) =>
  reqeust(`/${username}/${_id}`, {
    method: 'DELETE',
  })

export const deleteTodos = () =>
  reqeust(`/${username}/all`, {
    method: 'DELETE',
  })

export const updateTodoIsCompleted = (_id) =>
  reqeust(`/${username}/${_id}/toggle`, {
    method: 'PUT',
  })

export const getUsers = () => reqeust('/users')
