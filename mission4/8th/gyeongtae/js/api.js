const todoApiUrl = 'https://todo-api.roto.codes/'

// api 요청하기
async function requert(url, init, delay) {
  try {
    const response = await fetch(todoApiUrl + url + '?delay=' + delay, init)
    if (!response.ok) {
      throw new Error('api요청에 에러가 발생하였습니다.')
    }
    return response
  } catch (error) {
    console.log(error)
  }
}
// users가져오기
export async function getUsers() {
  const response = await requert('users')
  const responseToJson = await response.json()
  return responseToJson
}
// TodoList 가져오기
export async function getTodoList(userName, delay) {
  const response = await requert(userName, null, delay)
  const responseToJson = await response.json()
  return responseToJson
}
// TodoList 추가하기
export function addTodoList(userName, content) {
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: content,
    }),
  }
  requert(userName, init)
}
// TodoList 삭제하기
export function removeTodoList(userName, todoId) {
  const init = {
    method: 'DELETE',
  }
  requert(`${userName}/${todoId}`, init)
}
// TodoList 전체 삭제하기
export function removeAllTodoList(userName) {
  const init = {
    method: 'DELETE',
  }
  requert(`${userName}/all`, init)
}
// TodoList 토글
export function toggleTodoList(userName, todoId) {
  const init = {
    method: 'PUT',
  }
  requert(`${userName}/${todoId}/toggle`, init)
}
