import config from './config.js'

async function getTodoList() {
  return await fetch(`${config.baseUrl}/${config.username}`, {
    method: 'GET',
  })
}

async function addTodoItem(body) {
  return await fetch(`${config.baseUrl}/${config.username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
}

async function toggleTodo(id) {
  return await fetch(`${config.baseUrl}/${config.username}/${id}/toggle`, {
    method: 'PUT',
  })
}

async function deleteTodoItem(id) {
  return await fetch(`${config.baseUrl}/${config.username}/${id}`, {
    method: 'DELETE',
  })
}

export { getTodoList, addTodoItem, deleteTodoItem, toggleTodo }
