import { TODO_URL, DELAY_TIME } from '../commons/constants.js'

export const getTodoData = async (username) => {
  try {
    const response = await fetch(`${TODO_URL}/${username}?delay=${DELAY_TIME}`)
    if (!response.ok) {
      throw new Error('할 일 목록을 불러오는데 실패했습니다.')
    }
    return await response.json()
  } catch (e) {
    alert(e.message)
  }
}

export const addTodoData = async (username, newTodo) => {
  try {
    const response = await fetch(`${TODO_URL}/${username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: newTodo,
      }),
    })

    if (!response.ok) {
      throw new Error('할일을 추가하는데 실패했습니다.')
    }
    return response.json()
  } catch (e) {
    alert(e.messge)
  }
}

export const removeTodoData = async (username, id) => {
  try {
    const response = await fetch(`${TODO_URL}/${username}/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error('할일을 삭제하는데 실패했습니다.')
    }
    return response
  } catch (e) {
    alert(e.message)
  }
}

export const removeAllTodoData = async (username) => {
  try {
    const response = await fetch(`${TODO_URL}/${username}/all`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error('할일을 전체 삭제하는데 실패했습니다.')
    }
    return response
  } catch (e) {
    alert(e.message)
  }
}

export const toggleTodoData = async (username, id) => {
  try {
    const response = await fetch(`${TODO_URL}/${username}/${id}/toggle`, {
      method: 'PUT',
    })

    if (!response.ok) {
      throw new Error('할일 완료를 토글 하는데 실패했습니다.')
    }
    return response
  } catch (e) {
    alert(e.message)
  }
}

export const getUsersData = async () => {
  try {
    const response = await fetch(`${TODO_URL}/users`)
    if (!response.ok) {
      throw new Error('User 목록을 불러오는데 실패했습니다.')
    }
    return await response.json()
  } catch (e) {
    alert(e.message)
  }
}
