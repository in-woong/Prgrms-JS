const END_POINT = 'https://todo-api.roto.codes'

const request = async ({ path, options = {} }) => {
  try {
    const res = await fetch(`${END_POINT}/${path}`, options)
    if (!res.ok) {
      throw Error('서버와 통신에서 오류가 발생하였습니다')
    }
    return res.json()
  } catch (err) {
    console.error(error)
  }
}

export default function createAPI({ initialName }) {
  let username = ''
  function API() {}

  API.getUsername = () => {
    return username
  }

  API.setUsername = (newUsername) => {
    if (typeof newUsername !== 'string') throw Error(`${newUsername} is not type of string`)
    username = newUsername
  }

  API.getUsers = async () => {
    return request({ path: 'users' })
  }

  API.getTodos = async () => {
    return request({ path: username })
  }

  API.addTodo = async ({ content }) => {
    return request({
      path: username,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      },
    })
  }

  API.deleteTodo = async ({ id }) => {
    return request({
      path: `${username}/${id}`,
      options: {
        method: 'DELETE',
      },
    })
  }

  API.toggleCompletion = async ({ id }) => {
    return request({
      path: `${username}/${id}/toggle`,
      options: {
        method: 'PUT',
      },
    })
  }

  API.setUsername(initialName)

  return API
}
