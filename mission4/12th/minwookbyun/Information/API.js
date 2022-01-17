const END_POINT = 'https://todo-api.roto.codes'; //'/' 차이 

const request = async (url, options) => {
  try {
    const res = await fetch(`${END_POINT}${url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    })

    if (res.ok) {
      const result = await res.json()
      return result
    }
  } catch (e) {
    alert('서버 통신 중 에러가 났습니다!')
  }
}

export const fetchTodoList = async (username) =>
  await request(`/${username}`)


export const fetchUserList = async () =>
  await request(`/users`)



export const removeTodo = async (username, id) =>
  await request(`/${username}/${id}`, {
    method: 'DELETE'
  })


export const removeAll = async (username) =>
  await request(`/${username}/all`, {
    method: 'DELETE'
  })

export const onAddTodo = async (username, todoText) =>
  await request(`/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: todoText,
    }),
  })

export const toggleTodoItem = async (username, id) =>
  await request(`/${username}/${id}/toggle`, {
    method: 'PUT',
  })
  