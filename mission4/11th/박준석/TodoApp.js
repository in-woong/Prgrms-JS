import { TodoAPI } from './TodoAPI.js'
import { $ } from './util.js'
import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoRemoveAll from './TodoRemoveAll.js'
import ShowUserList from './ShowUserList.js'

export default class TodoApp {
  constructor() {
    this.selectedUserName = $('#current-user-name')
    this.todolistData = []

    this.userList = new ShowUserList({
      targetUserList: $('#user-list'),
      targetTodoList: $('#users-todo-list'),
      showUserTodoList: (username) => {
        this.username = username
        this.selectedUserName.innerHTML = this.username

        this.todoList = new TodoList({
          targetDone: $('#todo-list'),
          targetNotDone: $('#todo-list-notdone'),
          printTarget: $('#current-user-name'),
          todolistData: this.todolistData,
          onRemove: async (todoID) => {
            await TodoAPI.removeTodo(this.username, todoID)
            this.setState()
          },
          onDrop: async (todoID) => {
            await TodoAPI.checkTodo(this.username, todoID)
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
      },
    })
  }

  async setState() {
    this.todoList.setState(null)
    const updatedData = await TodoAPI.getTodo(this.username, 300)
    this.todoList.setState(updatedData)
  }
}
