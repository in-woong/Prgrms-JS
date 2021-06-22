const BASE_URL = 'https://todo-api.roto.codes'

async function request(URL, options = {}) {
  try {
    const res = await fetch(`${URL}?delay=1000`, options)
    if (!res.ok) throw new Error(`${res.status}`)

    const data = await res.json()

    return data
  } catch (e) {
    console.error(e)
    return null
  }
}

export function getTodoItems(username) {
  return request(`${BASE_URL}/${username}`)
}

export function addTodoItem(content, username) {
  return request(`${BASE_URL}/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  })
}

export function deleteTodoItem(todoItemId, username) {
  return request(`${BASE_URL}/${username}/${todoItemId}`, {
    method: 'DELETE',
  })
}

export function toggleTodoItem(todoItemId, username) {
  return request(`${BASE_URL}/${username}/${todoItemId}/toggle`, {
    method: 'PUT',
  })
}

export function getUsers() {
  return request(`${BASE_URL}/users`)
}
