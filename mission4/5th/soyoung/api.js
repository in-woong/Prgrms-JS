async function getItem(username) {
  const res = await fetch(`http://todo-api.roto.codes/${username}`)
  return await res.json()
}

async function addItem(username, todoText) {
  fetch(`http://todo-api.roto.codes/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: todoText,
    }),
  })
}

async function editItem(username, id) {
  return fetch(`http://todo-api.roto.codes/${username}/${id}/toggle`, {
    method: 'PUT',
  })
}

async function removeItem(username, id) {
  return fetch(`http://todo-api.roto.codes/${username}/${id}`, {
    method: 'DELETE',
  })
}
