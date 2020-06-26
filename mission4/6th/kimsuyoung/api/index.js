const BASE_URL = 'https://todo-api.roto.codes'

export const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users?delay=3000`)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}

export const getUserTodoLists = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/${user}?delay=3000`)
    const result = await response.json()
    return result
  } catch (error) {
    console.error(error)
  }
}

export const postTodoList = async ({ text, user }) => {
  try {
    await fetch(`${BASE_URL}/${user}`, {
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

export const deleteTodoList = async ({ id, user }) => {
  try {
    await fetch(`${BASE_URL}/${user}/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error(error)
  }
}

export const toggleTodoList = async ({ id, user }) => {
  try {
    await fetch(`${BASE_URL}/${user}/${id}/toggle`, {
      method: 'PUT',
    })
  } catch (error) {
    console.error(error)
  }
}
