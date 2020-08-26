import { FETCH_BASE_URL } from './constantKeys.js'
import { checkDataFormat, renderErrorNotification } from './utils.js'

const fetchData = async ({ path, method, body }) => {
  const property = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  if (body) {
    property.body = body
  }

  const response = await fetch(`${FETCH_BASE_URL}/${path}`, property)

  if (response.status !== 200) {
    throw new Error('error: fetch response failed')
  }

  return await response.json()
}

export const getUsersList = async (path) => {
  try {
    const responseLists = await fetchData({
      path: `${path}?delay=1000`,
      method: 'GET',
    })
    return responseLists
  } catch (error) {
    console.log(error)
    console.error('Users List를 가져오는데 실패했습니다.')
  }
}

export const getTodoList = async (elementDom, userName) => {
  try {
    const responseLists = await fetchData({
      path: `${userName}?delay=500`,
      method: 'GET',
    })
    checkDataFormat(responseLists)
    return responseLists
  } catch (error) {
    console.error('Todo List를 가져오는데 실패했습니다.')
    renderErrorNotification(error, elementDom)
  }
}

export const addTodo = async (userName, addData) => {
  try {
    await fetchData({
      path: `${userName}`,
      method: 'POST',
      body: JSON.stringify(addData),
    })
  } catch (error) {
    console.log(error)
    console.error('Todolist를 추가하는데 실패했습니다.')
  }
}

export const toggleTodo = async (userName, listIndex) => {
  try {
    await fetchData({
      path: `${userName}/${listIndex}/toggle`,
      method: 'PUT',
    })
  } catch (error) {
    console.log(error)
    console.error('TodoList 토글 처리가 실패했습니다.')
  }
}

export const removeTodo = async (userName, listIndex) => {
  try {
    await fetchData({
      path: `${userName}/${listIndex}`,
      method: 'DELETE',
    })
  } catch (error) {
    console.log(error)
    console.error('TodoList를 삭제하는데 실패했습니다.')
  }
}

export const removeAllTodo = async (userName) => {
  try {
    await fetchData({
      path: `${userName}/all`,
      method: 'DELETE',
    })
  } catch (error) {
    console.log(error)
    console.error('TodoList를 모두 삭제하는데 실패했습니다.')
  }
}
