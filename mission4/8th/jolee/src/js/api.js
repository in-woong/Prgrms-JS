export const getItems = async (username) => {
  const res = await fetch(`https://todo-api.roto.codes/${username}`)
  return await res.json()
}

export const addItem = async (username, todoText) => {
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

export const toggleItem = async (username, id) => {
  return fetch(`https://todo-api.roto.codes/${username}/${id}/toggle`, {
    method: 'PUT',
  })
}

export const deleteItem = async (username, id) => {
  return fetch(`https://todo-api.roto.codes/${username}/${id}`, {
    method: 'DELETE',
  })
}
