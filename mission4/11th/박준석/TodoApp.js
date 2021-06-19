import { getTodo, addTodo, checkTodo, removeTodo } from './TodoAPI.js'
import { $ } from './util.js'
import TodoList from './TodoList.js'

export default class TodoApp {
  constructor(username) {
    this.username = username
    this.data = getTodo(this.username)

    this.todoList = new TodoList({
      $target: $('#todo-list'),
      data: this.data,
      username: this.username,
      onClick: async (username, todoID) => {
        await checkTodo(username, todoID)
        this.setState()
      },
      onRemove: async (username, todoID) => {
        await removeTodo(username, todoID)
        this.setState()
      },
    })
    this.setState()
  }

  async setState() {
    this.todoList.setState([]);
    const updatedData = await getTodo(this.username, 300)
    this.todoList.setState(updatedData)
  }
}
