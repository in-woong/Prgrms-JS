import crudAPI from './crud_api.json' assert { type: 'json' }
import { errorHandler } from './helper.js'

// 할 일 목록 불러오기
export async function bringTodoListFromAPIByUserName(userName, delay = 0) {
  try {
    const response = await fetch(
      `https://todo-api.roto.codes/${userName}?delay=${delay}`
    )
    if (response.ok) {
      const todoListData = await response.json()
      return todoListData
    }
    throw new Error(`Response: ${response.statusText}`)
  } catch (error) {
    errorHandler(error)
  }
}

// 할 일 추가하기
export async function addTodoListToAPI() {
  const addTodoInput = document.querySelector('#add-todo__input')

  try {
    if (!addTodoInput.value.trim().length)
      throw new Error(`There are no todo in input 😟`)
    if (addTodoInput.value.length) {
      const response = await fetch('https://todo-api.roto.codes/sangjun_park', {
        ...crudAPI.CREATE,
        body: JSON.stringify({
          content: addTodoInput.value,
        }),
      })
      if (!response.ok) throw new Error(`Response: ${response.statusText}`)
    }
  } catch (error) {
    errorHandler(error)
  }
}

// 할 일 완료 여부 토글하기
export async function toggleCompleteOrNotBtn(todoObj) {
  try {
    const bringTodoListData = await bringTodoListFromAPIByUserName(
      'sangjun_park'
    )
    const newTodoListData = bringTodoListData.map((todo) => {
      return todo._id === todoObj._id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo
    })
    const response = await fetch(
      `https://todo-api.roto.codes/sangjun_park/${todoObj._id}/toggle`,
      {
        ...crudAPI.UPDATE,
        body: JSON.stringify({ ...newTodoListData }),
      }
    )
    if (!response.ok) throw new Error(`Response: ${response.statusText}`)
  } catch (error) {
    errorHandler(error)
  }
}

// 할 일 삭제하기
export async function removeTodoListInAPI(todoDataArr, deleteIdx) {
  try {
    const response = await fetch(
      `https://todo-api.roto.codes/sangjun_park/${todoDataArr[deleteIdx]._id}`,
      {
        ...crudAPI.DELETE,
      }
    )
    if (!response.ok) throw new Error(`Response: ${response.statusText}`)
  } catch (error) {
    errorHandler(error)
  }
}

// 특정 사용자의 할 일 전체 삭제하기
export async function removeTodoListAllInAPI() {
  try {
    const response = await fetch(
      'https://todo-api.roto.codes/sangjun_park/all',
      crudAPI.DELETE
    )
    if (!response.ok) throw new Error(`Response: ${response.statusText}}`)
  } catch (error) {
    errorHandler(error)
  }
}

// User 이름 목록 가져오기
export async function fetchUserNamesFromAPI() {
  try {
    const response = await fetch('https://todo-api.roto.codes/users')
    if (response.ok) {
      const responseUserNameList = await response.json()
      return responseUserNameList
    }
    throw new Error(`Response: ${response.statusText}`)
  } catch (error) {
    errorHandler(error)
  }
}
