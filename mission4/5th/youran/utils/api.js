import { URL } from '../utils/constants.js'

export const fetchAllTodos = async username => {
  try {
    const response = await fetch(`${URL.TODO_API}/${username}`)
    return await _checkResponse(response).json()
  } catch (error) {
    console.error(error)
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
    return _checkResponse(response)
  } catch (error) {
    console.error(error)
  }
}

export const deleteTodo = async (username, todoId) => {
  try {
    const response = await fetch(`${URL.TODO_API}/${username}/${todoId}`, {
      method: 'DELETE',
    })
    return _checkResponse(response)
  } catch (error) {
    console.log(error)
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
    return _checkResponse(response)
  } catch (error) {
    console.log(error)
  }
}

export const fetchAllUsers = async () => {
  try {
    const response = await fetch(`${URL.TODO_API}/users`)
    return await _checkResponse(response).json()
  } catch (error) {
    console.error(error)
  }
}

const _checkResponse = response => {
  //console.log(response)
  if (status >= 300 && status < 400) {
    // 추가 예정
  } else if (status >= 400 && status < 500) {
    throw new Error(`fail: 잘못된 요청입니다. status: ${status}`)
  } else if (status >= 500 && status < 600) {
    throw new Error(`fail: 잠시 후 다시 시도하세요. status: ${status}`)
  }
  return response
}
