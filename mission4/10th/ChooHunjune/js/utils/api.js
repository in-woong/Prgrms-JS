const END_POINT = 'https://todo-api.roto.codes'


const request = async (url, params) => {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      ... params,
    })

    if (!response.ok) {
      throw Error(`Request Error: ${response.status}`)
    }
    //console.log(response)
    const result = await response.json()
    return result

  } catch (e) {
    console.error(e)
  }
}

export const fetchTodoItemAPI = async (user) => {
  return await request(`${END_POINT}/${user}`)
}

export const addTodoItemAPI = async (user, todoItemContent) => {
  await request(`${END_POINT}/${user}`, {
    method: 'POST',
    body: JSON.stringify({
      content: todoItemContent
    }),
  })
}

export const delTodoItemAPI = async (user, todoItemId) => {
  await request(`${END_POINT}/${user}/${todoItemId}`, {
    method: 'DELETE',
  })
}

export const clearTodoListAPI = async (user) => {
  await request(`${END_POINT}/${user}/all`, {
    method: 'DELETE',
  })
}

export const toggleTodoItemAPI = async (user, todoItemId) => {
  await request(`${END_POINT}/${user}/${todoItemId}/toggle`, {
    method: 'PUT',
  })
}
