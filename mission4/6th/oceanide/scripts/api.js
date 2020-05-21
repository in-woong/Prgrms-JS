import { BASE_URL } from './constant.js'

export const fetchTodos = async (username) => {
  try {
    const res = await fetch(`${BASE_URL}/${username}`)
    if (!res.ok) {
      throw new Error({ status: res.status, statusText: res.statusText })
    }

    return await res.json()
  } catch (err) {
    console.log(err)
  }
}

export const addTodo = async (username, content) => {
  try {
    const res = await fetch(`${BASE_URL}/${username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    })

    if (!res.ok) {
      throw new Error({ status: res.status, statusText: res.statusText })
    }

    return await res.json()
  } catch (err) {
    console.log(err)
  }
}

export const toggleTodo = async (username, id) => {
  try {
    const res = await fetch(`${BASE_URL}/${username}/${id}/toggle`, {
      method: 'PUT',
    })

    if (!res.ok) {
      throw new Error({ status: res.status, statusText: res.statusText })
    }

    return await res.json()
  } catch (err) {
    console.log(err)
  }
}

export const deleteTodo = async (username, id) => {
  try {
    const res = await fetch(`${BASE_URL}/${username}/${id}`, {
      method: 'DELETE',
    })

    if (!res.ok) {
      throw new Error({ status: res.status, statusText: res.statusText })
    }

    return await res.json()
  } catch (err) {
    console.log(err)
  }
}
