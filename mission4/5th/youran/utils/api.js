import { URL } from '../utils/constants.js'

export const fetchAllTodos = async username => {
  try {
    const response = await fetch(`${URL.TODO_API}/${username}`)
    return await checkResponse(response).json()
  } catch (error) {
    throw error
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
    return checkResponse(response)
  } catch (error) {
    throw error
  }
}

export const deleteTodo = async (username, todoId) => {
  try {
    const response = await fetch(`${URL.TODO_API}/${username}/${todoId}`, {
      method: 'DELETE',
    })
    return checkResponse(response)
  } catch (error) {
    throw error
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
    return checkResponse(response)
  } catch (error) {
    throw error
  }
}

export const fetchAllUsers = async () => {
  try {
    const response = await fetch(`${URL.TODO_API}/users/users`)
    return await checkResponse(response).json()
  } catch (error) {
    throw error
  }
}

const checkResponse = response => {
  const status = response.status
  if (status >= 300 && status < 400) {
    const location = response.headers.location
    if (!loacation) return
    throw new Error(`Api Error - redirect to ${location} (${status})`)
  } else if (status >= 400 && status < 500) {
    throw new Error(`Api Error - 잘못된 요청입니다. (${status})`)
  } else if (status >= 500 && status < 600) {
    throw new Error(`Api Error - 잠시 후 다시 시도하세요. (${status})`)
  }
  return response
}
