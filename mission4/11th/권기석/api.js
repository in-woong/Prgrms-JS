const base_url = 'https://todo-api.roto.codes'

export const onGetTodoList = async (username) => {
  const res = await fetch(`${base_url}/${username}`, {
    method: 'GET',
  })
  if (res.ok) {
    return res.json()
  } else {
    throw new Error(`잘못받아왔어요`)
  }
}

export const onAddTodo = async (username, content) => {
  const res = await fetch(`${base_url}/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content,
    }),
  })
  if (res.ok) {
    return true
  } else {
    throw new Error(`생성 불가!`)
  }
}

export const onDeleteTodo = async (username, todo_id) => {
  const res = await fetch(`${base_url}/${username}/${todo_id}`, {
    method: 'DELETE',
  })
  if (res.ok) {
    return true
  } else {
    throw new Error(`삭제 불가!`)
  }
}

export const onDeleteAllTodo = async (username) => {
  const res = await fetch(`${base_url}/${username}/all`, {
    method: 'DELETE',
  })
  if (res.ok) {
    return true
  } else {
    throw new Error(`전체 삭제 불가!`)
  }
}

export const onChangeToggle = async (username, todo_id) => {
  const res = await fetch(`${base_url}/${username}/${todo_id}/toggle`, {
    method: 'PUT',
  })
  if (res.ok) {
    return true
  } else {
    throw new Error(`토글 변경 불가`)
  }
}

export const onGetUserList = async () => {
  const res = await fetch(`${base_url}/users`, {
    method: 'GET',
  })
  if (res.ok) {
    return res.json()
  } else {
    throw new Error(`유저 목록을 못받아옴`)
  }
}
