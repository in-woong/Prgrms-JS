const BASE_URL = 'https://todo-api.roto.codes'
const DELAY = 0

async function request(URL, options = {}) {
  const response = await fetch(`${URL}?delay=${DELAY}`, options)
  if (!response.ok) throw response

  const data = await response.json()

  return data
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
