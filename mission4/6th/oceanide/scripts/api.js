import { BASE_URL, DELAY } from './constant.js'

const requestApi = async (path, { method = 'GET', header, body }) => {
  const option = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (header) {
    option.headers = Object.assign(option.headers, header)
  }

  if (body) {
    option.body = body
  }
  const res = await fetch(`${BASE_URL}${path}`, option)

  if (!res.ok) {
    throw new Error({ status: res.status, statusText: res.statusText })
  }

  return await res.json()
}

export const getTodos = async (username) => {
  try {
    return await requestApi(`/${username}?delay=${DELAY}`, { method: 'GET' })
  } catch (err) {
    console.error(err)
    alert('Todo list를 가져오는데 실패했습니다.')
  }
}

export const addTodo = async (username, content) => {
  try {
    return await requestApi(`/${username}`, {
      method: 'POST',
      body: JSON.stringify(content),
    })
  } catch (err) {
    console.error(err)
    alert('Todo를 추가하는데 실패했습니다.')
  }
}

export const toggleTodo = async (username, id) => {
  try {
    await requestApi(`/${username}/${id}/toggle`, { method: 'PUT' })
  } catch (err) {
    console.error(err)
    alert('Todo 완료처리하는데 실패했습니다.')
  }
}

export const deleteTodo = async (username, id) => {
  try {
    return await requestApi(`/${username}/${id}`, { method: 'DELETE' })
  } catch (err) {
    console.error(err)
    alert('Todo를 삭제하는데 실패했습니다.')
  }
}

export const getUsers = async () => {
  try {
    return await requestApi(`/users`, { method: 'GET' })
  } catch (err) {
    console.error(err)
    alert('Todo User list를 가져오는데 실패했습니다')
  }
}
