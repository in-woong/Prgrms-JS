const END_POINT = 'https://todo-api.roto.codes'

async function fetchData(username, delay) {
  let url = `${END_POINT}/${username}`
  if (delay) {
    url += `?delay=${delay}`
  }
  try {
    const res = await fetch(url)
    if (res.ok) {
      return res.json()
    }
    throw new Error('API 요청 오류')
  } catch (e) {
    console.error(e)
  }
}

async function fetchUser(delay) {
  let url = `${END_POINT}/users`
  if (delay) {
    url += `?delay=${delay}`
  }
  try {
    const res = await fetch(url)
    if (res.ok) {
      return res.json()
    }
    throw new Error('API 요청 오류')
  } catch (e) {
    console.error(e)
  }
}

async function toggleTodo(username, id, delay) {
  let url = `${END_POINT}/${username}/${id}/toggle`
  if (delay) {
    url += `?delay=${delay}`
  }
  try {
    await fetch(url, {
      method: 'PUT',
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('API 요청 오류')
    })
  } catch (e) {
    console.error(e)
  }
}

async function deleteTodo(username, id, delay) {
  let url = `${END_POINT}/${username}/${id}`
  if (delay) {
    url += `?delay=${delay}`
  }
  try {
    await fetch(url, {
      method: 'DELETE',
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('API 요청 오류')
    })
  } catch (e) {
    console.error(e)
  }
}

async function addTodo(username, data, delay) {
  let url = `${END_POINT}/${username}`
  if (delay) {
    url += `?delay=${delay}`
  }
  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: data,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('API 요청 오류')
    })
  } catch (e) {
    console.error(e)
  }
}

export { fetchData, fetchUser, toggleTodo, deleteTodo, addTodo }
