const API_URL = 'https://todo-api.roto.codes'

const request = async ({ url, option = {}, refetchObj = {} }) => {
  try {
    const res = await fetch(url, option)
    if (!res.ok) {
      return new Error()
    }
    return refetchObj.todo
      ? await getTodoList(refetchObj.userName)
      : await res.json()
  } catch (e) {
    alert(e)
    return []
  }
}

export const getTodoList = async (userName) => {
  return await request({ url: `${API_URL}/${userName}?delay=1000` })
}

export const getUserList = async () => {
  return await request({ url: `${API_URL}/users` })
}

export const addTodoList = async (userName, content) => {
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content,
    }),
  }
  return await request({
    url: `${API_URL}/${userName}`,
    option,
    refetchObj: {
      todo: true,
      userName,
    },
  })
}

export const deleteTodoList = async (userName, id) => {
  const option = {
    method: 'DELETE',
  }
  return await request({
    url: `${API_URL}/${userName}/${id}`,
    option,
    refetchObj: {
      todo: true,
      userName,
    },
  })
}

export const deleteAllTodoList = async (userName) => {
  const option = {
    method: 'DELETE',
  }
  return await request({
    url: `${API_URL}/${userName}/all`,
    option,
    refetchObj: {
      todo: true,
      userName,
    },
  })
}

export const toggleTodoList = async (userName, id) => {
  const option = {
    method: 'PUT',
  }
  return await request({
    url: `${API_URL}/${userName}/${id}/toggle`,
    option,
    refetchObj: {
      todo: true,
      userName,
    },
  })
}
