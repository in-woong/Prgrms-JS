import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import { getItems, addItem, toggleItem, deleteItem, deleteAllItem } from './api.js'
import { setStorage, getStorageData } from './storage.js'

function App(element) {
  const $app = element
  this.username = ':jolee'

  this.render = async function () {
    this.data = await getItems(this.username)
    this.todoInput = new TodoInput({
      $target: document.querySelector('#todo-input-text'),
      addTodo: async (todoText) => {
        await addItem(this.username, todoText)
        const updateTodoList = await getItems(this.username)
        this.todoList.setState(updateTodoList)
      },
    })
    this.todoList = new TodoList({
      $target: document.querySelector('#todo-list'),
      data: this.data,
      toggleTodo: async (id) => {
        await toggleItem(this.username, id)
        const updateTodoList = await getItems(this.username)
        this.todoList.setState(updateTodoList)
      },
      deleteTodo: async (id) => {
        await deleteItem(this.username, id)
        const updateTodoList = await getItems(this.username)
        this.todoList.setState(updateTodoList)
      },
    })
  }

  this.$removeAllButton = document.querySelector('#todo-remove-all-button')

  this.$removeAllButton.addEventListener('click', async () => {
    await deleteAllItem(this.username)
    const updateTodoList = await getItems(this.username)
    this.todoList.setState(updateTodoList)
  })

  this.render()
}

export default App
