const API_URL = `http://todo-api.roto.codes/`
const ERR_MSG = `네트워크가 불안정합니다. 잠시후 다시 시도해주세요.`

export async function fetchData(username) {
  try {
    const res = await fetch(`${API_URL}${username}?delay=1000`)
    return await res.json()
  } catch (error) {
    alert(ERR_MSG)
  }
}

export async function getUsers() {
  try {
    const res = await fetch(`${API_URL}users?delay=1000`)
    return await res.json()
  } catch (error) {
    alert(ERR_MSG)
  }
}

export async function addData(username, todoText) {
  try {
    await fetch(`${API_URL}${username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: todoText,
      }),
    })
  } catch (error) {
    alert(ERR_MSG)
  }
}

export async function toggleData(username, id) {
  try {
    await fetch(`${API_URL}${username}/${id}/toggle`, {
      method: 'PUT',
    })
  } catch (error) {
    alert(ERR_MSG)
  }
}

export async function removeData(username, id) {
  try {
    await fetch(`${API_URL}${username}/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    alert(ERR_MSG)
  }
}
