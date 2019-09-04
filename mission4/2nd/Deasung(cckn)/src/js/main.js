import TodoList from './TodoList.js'
import Api from './Api.js'

import config from './config.js'
;(async function() {
  const api = new Api(config.baseURL, config.defaultUsername)

  const data = await api.getTodos()

  const update = async () => {
    const updatedData = await api.getTodos()
    todoList.setState(updatedData)
  }

  const todoList = new TodoList({
    $target: document.querySelector('#todo-list'),
    data: data,
    onClick: async function(id) {
      await api.toggleTodo(id)
      update()
    },
    onRemove: async function(id) {
      await api.removeTodo(id)
      update()
    },
  })

  document
    .querySelector('#add-todo-button')
    .addEventListener('click', async function() {
      const todoText = document.querySelector('#todo-input').value

      if (todoText.length > 0) {
        await api.addTodo(todoText)
        update()
      }
    })
})()
