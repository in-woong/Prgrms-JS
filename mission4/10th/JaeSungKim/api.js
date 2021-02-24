const END_POINT = 'https://todo-api.roto.codes'

async function fetchData(username, delay) {
  let url = `${END_POINT}/${username}`
  if (delay) {
    url += `?delay=${delay}`
  }
  const res = await fetch(url)
  return await res.json()
}

async function fetchUser(delay) {
  let url = `${END_POINT}/users`
  if (delay) {
    url += `?delay=${delay}`
  }
  const res = await fetch(url)
  return await res.json()
}

async function toggleTodo(username, id, delay) {
  let url = `${END_POINT}/${username}/${id}/toggle`
  if (delay) {
    url += `?delay=${delay}`
  }
  await fetch(url, {
    method: 'PUT',
  })
}

async function deleteTodo(username, id, delay) {
  let url = `${END_POINT}/${username}/${id}`
  if (delay) {
    url += `?delay=${delay}`
  }
  await fetch(url, {
    method: 'DELETE',
  })
}

async function addTodo(username, data, delay) {
  let url = `${END_POINT}/${username}`
  if (delay) {
    url += `?delay=${delay}`
  }
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: data,
    }),
  })
}

export { fetchData, fetchUser, toggleTodo, deleteTodo, addTodo }
