const todoApiUrl = 'https://todo-api.roto.codes/'
import { hideLoading, showLoading } from './Loading.js'

// api 요청하기
async function requert(url, fetchParameter, delay) {
  try {
    showLoading()
    const response = await fetch(
      `${todoApiUrl}${url}?delay=${delay}`,
      fetchParameter
    )
    if (!response.ok) {
      throw new Error('api요청에 에러가 발생하였습니다.')
    }
    const responseToJson = await response.json()
    hideLoading()
    return responseToJson
  } catch (error) {
    console.log(error)
  }
}
// users가져오기
export async function getUsers() {
  return await requert('users')
}
// TodoList 가져오기
export async function getTodoList(userName, delay) {
  return await requert(userName, null, delay)
}
// TodoList 추가하기
export function addTodoList(userName, content) {
  const fetchParameter = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: content,
    }),
  }
  requert(userName, fetchParameter)
}
// TodoList 삭제하기
export function removeTodoList(userName, todoId) {
  const fetchParameter = {
    method: 'DELETE',
  }
  requert(`${userName}/${todoId}`, fetchParameter)
}
// TodoList 전체 삭제하기
export function removeAllTodoList(userName) {
  const fetchParameter = {
    method: 'DELETE',
  }
  requert(`${userName}/all`, fetchParameter)
}
// TodoList 토글
export function toggleTodoList(userName, todoId) {
  const fetchParameter = {
    method: 'PUT',
  }
  requert(`${userName}/${todoId}/toggle`, fetchParameter)
}
