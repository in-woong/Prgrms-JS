export const getTodoApi = async username => {
  const res = await fetch(`http://todo-api.roto.codes/${username}?delay=1000`)
  return await res.json()
}

export const addTodoApi = async (username, todo) => {
  console.log(todo)
  await fetch(`http://todo-api.roto.codes/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: todo,
    }),
  })
}

export const removeTodoApi = async (username, _id) => {
  console.log(username, _id)
  await fetch(`http://todo-api.roto.codes/${username}/${_id}`, {
    method: 'DELETE',
  })
}

export const toggleTodoApi = async (username, _id) => {
  await fetch(`http://todo-api.roto.codes/${username}/${_id}/toggle`, {
    method: 'PUT',
  })
}

export const getUsersTodoApi = async () => {
  const users = await fetch(`http://todo-api.roto.codes/users?delay=1000`)
  return await users.json()
}
