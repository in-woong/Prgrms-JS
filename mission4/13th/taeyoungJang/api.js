const API_BASE_URL = 'https://todo-api.roto.codes'
const ALERT_MESSAGE = '요청 실패! 잠시 후에 다시 시도해주세요.'

export async function getTodos(username) {
  try {
    const response = await fetch(`${API_BASE_URL}/${username}`)
    if (!response.ok) {
      throw Error(ALERT_MESSAGE)
    }
    return await response.json()
  } catch (error) {
    alert(error.message)
  }
}

export async function addTodo({ username, content }) {
  try {
    const response = await fetch(`${API_BASE_URL}/${username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
      }),
    })
    if (!response.ok) {
      throw Error(ALERT_MESSAGE)
    }
  } catch (error) {
    alert(error.message)
  }
}

export async function deleteTodo({ username, id }) {
  try {
    const response = await fetch(`${API_BASE_URL}/${username}/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      throw Error(ALERT_MESSAGE)
    }
  } catch (error) {
    alert(error.message)
  }
}

export async function deleteTodoAll(username) {
  try {
    const response = await fetch(`${API_BASE_URL}/${username}/all`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw Error(ALERT_MESSAGE)
    }
  } catch (error) {
    alert(error.message)
  }
}

export async function toggleTodo({ username, id }) {
  try {
    const response = await fetch(`${API_BASE_URL}/${username}/${id}/toggle`, {
      method: 'PUT',
    })
    if (!response.ok) {
      throw Error(ALERT_MESSAGE)
    }
  } catch (error) {
    alert(error.message)
  }
}
