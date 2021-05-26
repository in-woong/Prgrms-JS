import { ERROR_MSG } from './ERROR_MSG.js'

const END_POINT = 'https://todo-api.roto.codes'
const DELAY_TIME = 1500
const HTTP_OK = 200

const getTodoList = async (username) => {
  const res = await fetch(`${END_POINT}/${username}?delay=${DELAY_TIME}`)

  if (res.status === HTTP_OK) {
    try {
      // return await res.json()
      const todoList = await res.json()
      return { isOK: true, todoList }
    } catch {
      return { isOK: false, popupTitle: 'Error Alert', popupMsg: ERROR_MSG.JSON_PARSE_ERROR }
    }
  }

  return { isOK: false, popupTitle: 'Error Alert', popupMsg: ERROR_MSG.RIASE_EXCEPTION }
}

const setTodoList = async (username, todoText) => {
  const res = await fetch(`${END_POINT}/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: todoText,
    }),
  })

  return res.status === HTTP_OK ? { isOK: true } : { isOK: false, popupTitle: 'Error Alert', popupMsg: ERROR_MSG.RIASE_EXCEPTION }
}

const deleteAll = async (username) => {
  const res = await fetch(`${END_POINT}/${username}/all`, {
    method: 'DELETE',
  })

  return res.status === HTTP_OK ? { isOK: true } : { isOK: false, popupTitle: 'Error Alert', popupMsg: ERROR_MSG.RIASE_EXCEPTION }
}

const deleteTodo = async (username, id) => {
  const res = await fetch(`${END_POINT}/${username}/${id}`, {
    method: 'DELETE',
  })

  return res.status === HTTP_OK ? { isOK: true } : { isOK: false, popupTitle: 'Error Alert', popupMsg: ERROR_MSG.RIASE_EXCEPTION }
}

const toggleTodo = async (username, id) => {
  const res = await fetch(`${END_POINT}/${username}/${id}/toggle`, {
    method: 'PUT',
  })

  return res.status === HTTP_OK ? { isOK: true } : { isOK: false, popupTitle: 'Error Alert', popupMsg: ERROR_MSG.RIASE_EXCEPTION }
}

const getUserList = async () => {
  const res = await fetch(`${END_POINT}/users`, {
    method: 'GET',
  })

  if (res.status === HTTP_OK) {
    try {
      // return await res.json()
      const userList = await res.json()
      return { isOK: true, userList }
    } catch {
      return { isOK: false, popupTitle: 'Error Alert', popupMsg: ERROR_MSG.JSON_PARSE_ERROR }
    }
  }

  return { isOK: false, popupTitle: 'Error Alert', popupMsg: ERROR_MSG.RIASE_EXCEPTION }
}

export { getTodoList, setTodoList, deleteAll, deleteTodo, toggleTodo, getUserList }
