const getTodoList = async (username) => {
  const res = await fetch(`https://todo-api.roto.codes/${username}?delay=100`)
  return await res.json()
}

const setTodoList = async (username, todoText) => {
  return await fetch(`https://todo-api.roto.codes/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: todoText,
    }),
  })
}

const deleteAll = async (username) => {
  await fetch(`https://todo-api.roto.codes/${username}/all`, {
    method: 'DELETE',
  })
}

const deleteTodo = async (username, id) => {
  await fetch(`https://todo-api.roto.codes/${username}/${id}`, {
    method: 'DELETE',
  })
}

const toggleTodo = async (username, id) => {
  await fetch(`https://todo-api.roto.codes/${username}/${id}/toggle`, {
    method: 'PUT',
  })
}

export { getTodoList, setTodoList, deleteAll, deleteTodo, toggleTodo }
