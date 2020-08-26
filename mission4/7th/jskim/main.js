import TodoList from './TodoList.js'
import { getTodoList, addTodoItem, toggleTodo, deleteTodoItem } from './api.js'
;(async function () {
  async function fetchData() {
    const res = await getTodoList()
    return await res.json()
  }

  function updateData() {
    const updatedData = await fetchData()
    todoList.setState(updatedData)
  }

  const data = await fetchData()

  const todoList = new TodoList({
    $target: document.querySelector('#todo-list'),
    data: data,
    onClick: async function (id) {
      await toggleTodo(id)
      updateData()
    },
    onRemove: async function (id) {
      await deleteTodoItem(id)
      updateData()
    },
  })

  document
    .querySelector('#add-todo-button')
    .addEventListener('click', async function () {
      const todoText = document.querySelector('#todo-input').value
      if (todoText.length > 0) {
        await addTodoItem(
          JSON.stringify({
            content: todoText,
          })
        )
        updateData()
      }
    })
})()
