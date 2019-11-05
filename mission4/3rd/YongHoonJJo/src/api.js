import { isLoading } from './utils.js'

export const getTodoList = async (username) => {
  isLoading()
  return await fetch(`http://todo-api.roto.codes/${username}`)
}

export const updateTodoItem = async (username, id) => {
  isLoading()
  await fetch(`http://todo-api.roto.codes/${username}/${id}/toggle`, {
    method: 'PUT',
  })
}

export const deleteTodoItem = async (username, id) => {
  isLoading()
  await fetch(`http://todo-api.roto.codes/${username}/${id}`, {
    method: 'DELETE',
  })
}

export const createTodoItem = async (username, todoText) => {
  isLoading()
  await fetch(`http://todo-api.roto.codes/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: todoText,
    }),
  })
}