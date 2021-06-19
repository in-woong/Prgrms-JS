import { TodoAPI } from './TodoAPI.js'
import { $ } from './util.js'
import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoRemoveAll from './TodoRemoveAll.js'
import ShowUserList from './ShowUserList.js'

export default class TodoApp {
  constructor() {
    this.printName = $('#current-user-name')
    this.data = []

    this.userList = new ShowUserList((username) => {
      this.username = username

      this.todoList = new TodoList({
        targetDone: $('#todo-list'),
        targetNotDone: $('#todo-list-notdone'),
        printTarget: $('#current-user-name'),
        data: this.data,
        onClick: async (todoID) => {
          await TodoAPI.checkTodo(this.username, todoID)
          this.setState()
        },
        onRemove: async (todoID) => {
          await TodoAPI.removeTodo(this.username, todoID)
          this.setState()
        },
      })

      this.todoInput = new TodoInput({
        targetButton: $('#add-todo-button'),
        targetInput: $('#todo-input'),
        inputEvent: async (inputValue) => {
          await TodoAPI.addTodo(this.username, inputValue)
          this.setState()
        },
      })

      this.todoRemoveAll = new TodoRemoveAll({
        targetButton: $('#removeall-button'),
        onRemoveAll: async () => {
          await TodoAPI.removeAllTodo(this.username)
          this.setState()
        },
      })

      this.setState()
    })
  }

  async setState() {
    this.printName.innerHTML = this.username
    this.todoList.setState(null)
    const updatedData = await TodoAPI.getTodo(this.username, 300)
    this.todoList.setState(updatedData)
  }
}
