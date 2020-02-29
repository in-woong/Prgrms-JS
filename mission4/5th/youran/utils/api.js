import { URL, USER } from '../utils/constants.js'

export async function fetchAllTodos() {
  const response = await fetch(`${URL.TODO_API}/${USER.NAME}`)
  return await response.json()
}

export async function postTodo(newTodo) {
  await fetch(`${URL.TODO_API}/${USER.NAME}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ content: newTodo }),
  })
}

export async function deleteTodo(todoId) {
  await fetch(`${URL.TODO_API}/${USER.NAME}/${todoId}`, {
    method: 'DELETE',
  })
}

export async function putTodo(todoId) {
  await fetch(`${URL.TODO_API}/${USER.NAME}/${todoId}/toggle`, {
    method: 'PUT',
  })
}
