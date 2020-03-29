async function getItem(username) {
  loaderStart()
  const res = await fetch(`https://todo-api.roto.codes/${username}?delay=1`)
  return await res.json()
}

async function addItem(username, todoText) {
  loaderStart()
  return fetch(`https://todo-api.roto.codes/${username}`, {
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
  loaderStart()
  return fetch(`https://todo-api.roto.codes/${username}/${id}/toggle`, {
    method: 'PUT',
  })
}

async function removeItem(username, id) {
  loaderStart()
  return fetch(`https://todo-api.roto.codes/${username}/${id}`, {
    method: 'DELETE',
  })
}

async function getUserList() {
  loaderStart()
  const res = await fetch(`https://todo-api.roto.codes/users`)
  return await res.json()
}
