const TODO_API = 'https://todo-api.roto.codes'

export const fetchData = async (username, delay) => {
  try {
    const res = await fetch(`${TODO_API}/${username}?delay=${delay}`)
    return res.json()
  } catch (e) {
    alert(e)
  }
}

export const putData = async (username, id) => {
  try {
    await fetch(`${TODO_API}/${username}/${id}/toggle`, {
      method: 'PUT',
    })
  } catch {
    alert(e)
  }
}

export const deleteData = async (username, id) => {
  try {
    await fetch(`${TODO_API}/${username}/${id}`, {
      method: 'DELETE',
    })
  } catch {
    alert(e)
  }
}

export const deleteDataAll = async (username) => {
  try {
    await fetch(`${TODO_API}/${username}/all`, {
      method: 'DELETE',
    })
  } catch {
    alert(e)
  }
}

export const postData = async (username, todoText) => {
  try {
    await fetch(`${TODO_API}/${username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: todoText,
      }),
    })
  } catch {
    alert(e)
  }
}

export const fetchUserList = async () => {
  try {
    const res = await fetch(`${TODO_API}/users`)
    return res.json()
  } catch (e) {
    alert(e)
  }
}
