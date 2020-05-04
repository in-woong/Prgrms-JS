import { URL } from '../utils/constants.js'
import { handleError } from './service.js'

export const fetchAllTodos = async username => {
  try {
    const response = await fetch(`${URL.TODO_API}/${username}`)
    return generatePromise(response)
  } catch (error) {
    handleError(error)
  }
}

export const postTodo = async (username, newTodo) => {
  try {
    const response = await fetch(`${URL.TODO_API}/${username}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        content: newTodo,
      }),
    })
    return generatePromise(response)
  } catch (error) {
    handleError(error)
  }
}

export const deleteTodo = async (username, todoId) => {
  try {
    const response = await fetch(`${URL.TODO_API}/${username}/${todoId}`, {
      method: 'DELETE',
    })
    return generatePromise(response)
  } catch (error) {
    handleError(error)
  }
}

export const putTodo = async (username, todoId) => {
  try {
    const response = await fetch(
      `${URL.TODO_API}/${username}/${todoId}/toggle`,
      {
        method: 'PUT',
      }
    )
    return generatePromise(response)
  } catch (error) {
    handleError(error)
  }
}

export const fetchAllUsers = async () => {
  try {
    const response = await fetch(`${URL.TODO_API}/users/users`)
    return generatePromise(response)
  } catch (error) {
    handleError(error)
  }
}

const generatePromise = response => {
  const status = response.status
  if (status >= 300 && status < 400) {
    const location = response.headers.location
    if (!loacation) return
    throw Promise.reject(makeAPIError(`redirect to ${location}`, status))
  } else if (status >= 400 && status < 500) {
    return Promise.reject(makeAPIError('잘못된 요청입니다.', status))
  } else if (status >= 500 && status < 600) {
    throw Promise.reject(makeAPIError('잠시 후 다시 시도하세요.', status))
  }
  return response.json()
}

//코드 참조 https://codeburst.io/error-handling-in-spa-applications-e94c4ecebd86
const makeAPIError = (message, status) => {
  const error = new Error(message)
  error.status = status
  return error
}
