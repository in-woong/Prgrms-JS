const BASE_URL = 'https://todo-api.roto.codes'

export const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}

export const getTodoLists = async () => {
  try {
    const response = await fetch(`${BASE_URL}/suyoung`)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}

export const postTodoList = async (text) => {
  try {
    await fetch(`${BASE_URL}/suyoung`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: text,
      }),
    })
  } catch (error) {
    console.error(error)
  }
}

export const deleteTodoList = async (id) => {
  try {
    await fetch(`${BASE_URL}/suyoung/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error(error)
  }
}

export const toggleTodoList = async (id) => {
  try {
    await fetch(`${BASE_URL}/suyoung/${id}/toggle`, {
      method: 'PUT',
    })
  } catch (error) {
    console.error(error)
  }
}
