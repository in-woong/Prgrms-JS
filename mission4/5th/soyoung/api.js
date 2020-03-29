async function getItem(username) {
  const res = await fetch(`https://todo-api.roto.codes/${username}`)
  return await res.json()
}

async function addItem(username, todoText) {
  fetch(`https://todo-api.roto.codes/${username}`, {
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
  return fetch(`https://todo-api.roto.codes/${username}/${id}/toggle`, {
    method: 'PUT',
  })
}

async function removeItem(username, id) {
  return fetch(`https://todo-api.roto.codes/${username}/${id}`, {
    method: 'DELETE',
  })
}

async function getUserList() {
  const res = await fetch(`https://todo-api.roto.codes/users`)
  return await res.json()
}
