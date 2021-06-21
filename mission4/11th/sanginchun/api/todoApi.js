const BASE_URL = 'https://todo-api.roto.codes/'
const DEFAULT_USER_NAME = 'sanginchun'

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

export function getTodoItems() {
  return request(`${BASE_URL}${DEFAULT_USER_NAME}`)
}

export function addTodoItem(content) {
  return request(`${BASE_URL}${DEFAULT_USER_NAME}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  })
}

export function deleteTodoItem(todoItemId) {
  return request(`${BASE_URL}${DEFAULT_USER_NAME}/${todoItemId}`, {
    method: 'DELETE',
  })
}

export function deleteAllTodoItems() {
  return request(`${BASE_URL}${DEFAULT_USER_NAME}/all`, {
    method: 'DELETE',
  })
}

export function toggleTodoItem(todoItemId) {
  return request(`${BASE_URL}${DEFAULT_USER_NAME}/${todoItemId}/toggle`, {
    method: 'PUT',
  })
}
