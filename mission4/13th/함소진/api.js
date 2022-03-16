const API_URL = 'https://todo-api.roto.codes'

export const getUsersFetch = async () => {
  try {
    const res = await fetch(`${API_URL}/users`)
    if (!res.ok) {
      throw new Error('API Error: Get Users 요청 실패')
    }
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export const getTodoFetch = async (username) => {
  if (!username) return []
  try {
    const res = await fetch(`${API_URL}/${username}`)
    if (!res.ok) {
      throw new Error('API Error: Get Todo 요청 실패')
    }
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export const addTodoFetch = async (username, todoText) => {
  if (typeof todoText !== 'string') {
    throw new Error('API Error: 추가할 todo의 type을 확인해주세요')
  }
  try {
    const res = await fetch(`${API_URL}/${username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: todoText,
      }),
    })
    if (!res.ok) {
      throw new Error('API Error : Add Todo 요청 실패')
    }
  } catch (error) {
    console.log(error)
  }
}

export const removeTodoFetch = async (username, id) => {
  try {
    const res = await fetch(`${API_URL}/${username}/${id}`, {
      method: 'DELETE',
    })
    if (!res.ok) {
      throw new Error('API Error : Remove Todo 요청 실패')
    }
  } catch (error) {
    console.log(error)
  }
}

export const resetTodoFetch = async (username) => {
  try {
    const res = await fetch(`${API_URL}/${username}/all`, {
      method: 'DELETE',
    })
    if (!res.ok) {
      throw new Error('API Error : Reset Todo 요청 실패')
    }
  } catch (error) {
    console.log(error)
  }
}

export const toggleFetch = async (username, id) => {
  try {
    const res = await fetch(`${API_URL}/${username}/${id}/toggle`, {
      method: 'PUT',
    })
    if (!res.ok) {
      throw new Error('API Error : Toggle Todo 요청 실패')
    }
  } catch (error) {
    console.log(error)
  }
}
