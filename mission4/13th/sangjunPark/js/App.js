import { renderHowManyTimeLeft } from './helper.js'

import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import Users from './Users.js'

import {
  addTodoListToAPI,
  bringTodoListFromAPIByUserName,
  removeTodoListAllInAPI,
  toggleCompleteOrNotBtn,
  removeTodoListInAPI,
  fetchUserNamesFromAPI,
} from './api.js'

import {
  dragAndDropStart,
  dragAndDropInProgress,
  dragAndDropEndAndReturnTargetIdx,
} from './drag_and_drop.js'

async function App() {
  const addTodoButton = document.querySelector('#add-todo__button')
  const deleteAllTodoButton = document.querySelector('#delete-all-todo__button')
  const todoListEventDelegationParent = document.querySelector('#todo-list')
  const userTodoListEventDelegationParent =
    document.querySelector('#users-list')

  const completedTodoList = new TodoList()
  const notCompletedTodoList = new TodoList()
  const todoInput = new TodoInput()
  const todoCount = new TodoCount()
  const users = new Users()

  const DELAY = 3000
  let todoData = []

  // 초기화
  todoData = await bringTodoListFromAPIByUserName('sangjun_park')
  completedTodoList.render(todoData)
  notCompletedTodoList.render(todoData)
  todoCount.render(todoData)
  users.renderAllUsersBtns()

  // 할 일을 추가하는 버튼 누르기
  addTodoButton.addEventListener('click', async function () {
    await addTodoListToAPI()
    todoData = await bringTodoListFromAPIByUserName('sangjun_park')
    notCompletedTodoList.render(todoData)
    todoCount.render(todoData)
    todoInput.clearInput()
  })

  // 'TodoList' 내부 버튼 기능 구현하기
  todoListEventDelegationParent.addEventListener(
    'click',
    async function (event) {
      const targetId = event.path[1].id
      const targetIdx = todoData.findIndex(
        (element) => element._id === targetId
      )

      // 완료/미완료 버튼을 눌렀을 경우 기능 구현하기
      if (event.target.className === 'complete-button') {
        await toggleCompleteOrNotBtn(todoData[targetIdx])
        completedTodoList.render(todoData)
        notCompletedTodoList.render(todoData)
      }

      // 삭제 버튼을 눌렀을 경우 기능 구현하기
      if (event.target.className === 'delete-button')
        await removeTodoListInAPI(todoData, targetIdx)

      // 데이터를 가져온 뒤 랜더링하기
      todoData = await bringTodoListFromAPIByUserName('sangjun_park')
      completedTodoList.render(todoData)
      notCompletedTodoList.render(todoData)
      todoCount.render(todoData)
    }
  )

  // 할 일을 모두 지우는 버튼 누르기
  deleteAllTodoButton.addEventListener('click', async function () {
    await removeTodoListAllInAPI()
    todoData = await bringTodoListFromAPIByUserName('sangjun_park')
    completedTodoList.render(todoData)
    notCompletedTodoList.render(todoData)
    todoCount.render(todoData)
  })

  // User 버튼을 눌렀을 때 해당 사용자의 할 일 목록 보여주기
  userTodoListEventDelegationParent.addEventListener(
    'click',
    async function (event) {
      const usersListArray = await fetchUserNamesFromAPI()
      const targetIdx = usersListArray.findIndex(
        (element) => element === event.target.id
      )
      const userName = usersListArray[targetIdx]
      let userTodoList

      renderHowManyTimeLeft()
      userTodoList = await bringTodoListFromAPIByUserName(userName, DELAY)
      users.renderSelectedUser(userName, userTodoList)
    }
  )

  // 드래그 앤 드롭 이벤트 구현하기
  // dragAndDropEvent(todoListEventDelegationParent, todoData)
  todoListEventDelegationParent.addEventListener('dragstart', (event) =>
    dragAndDropStart(event)
  )
  todoListEventDelegationParent.addEventListener('dragover', (event) =>
    dragAndDropInProgress(event)
  )
  todoListEventDelegationParent.addEventListener('drop', async (event) => {
    const targetIdx = dragAndDropEndAndReturnTargetIdx(event, todoData)
    await toggleCompleteOrNotBtn(todoData[targetIdx])
    todoData = await bringTodoListFromAPIByUserName('sangjun_park')
    completedTodoList.render(todoData)
    notCompletedTodoList.render(todoData)
    todoCount.render(todoData)
    users.renderAllUsersBtns()
  })
}

App()
