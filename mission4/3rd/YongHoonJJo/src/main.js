import TodoList from './TodoList.js'
import { getTodoList, updateTodoItem, deleteTodoItem, createTodoItem } from './api.js'

;(async function() {
  const username = 'yonghoonjjo'

  async function fetchData() {
    const res = await getTodoList(username)
    return await res.json()
  }

  const data = await fetchData()

  async function setState(todoList) {
    const updatedData = await fetchData()
    todoList.setState(updatedData)  
  }

  const todoList = new TodoList({
    $target: document.querySelector('#todo-list'),
    data: data,
    onClick: async function(id) {
      await updateTodoItem(username, id)

      // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
      setState(todoList)
    },
    onRemove: async function(id) {
      await deleteTodoItem(username, id)

      // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
      setState(todoList)
    },
  })

  document
    .querySelector('#add-todo-button')
    .addEventListener('click', async function() {
      const todoText = document.querySelector('#todo-input').value

      if (todoText.length > 0) {
        // 데이터 추가하기
        await createTodoItem(username, todoText)

        // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
        setState(todoList)
      }
    })
})()
