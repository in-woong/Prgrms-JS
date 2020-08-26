import { username } from '../components/App.js'

async function getUsernames() {
  const res = await fetch('https://todo-api.roto.codes/users')
  return await res.json()
}
async function getTodos() {
  const res = await fetch(`https://todo-api.roto.codes/${username}?delay=500`)
  return await res.json()
}
async function saveTodo(todoText) {
  await fetch(`https://todo-api.roto.codes/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: todoText,
    }),
  })
}
async function toggleTodo(id) {
  await fetch(`https://todo-api.roto.codes/${username}/${id}/toggle`, {
    method: 'PUT',
  })
}
async function removeTodo(id) {
  await fetch(`https://todo-api.roto.codes/${username}/${id}`, {
    method: 'DELETE',
  })
}

export default {
  getUsernames,
  getTodos,
  saveTodo,
  toggleTodo,
  removeTodo,
}
