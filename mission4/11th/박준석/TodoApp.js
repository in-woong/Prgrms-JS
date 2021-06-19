import { getTodo, addTodo, checkTodo, removeTodo, removeAllTodo } from './TodoAPI.js'
import { $ } from './util.js'
import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoRemoveAll from './TodoRemoveAll.js'

export default class TodoApp {
  constructor(username) {
    this.username = username
    this.data = getTodo(this.username)

    this.todoList = new TodoList({
      target: $('#todo-list'),
      data: this.data,
      onClick: async (todoID) => {
        await checkTodo(this.username, todoID)
        this.setState()
      },
      onRemove: async (todoID) => {
        await removeTodo(this.username, todoID)
        this.setState()
      },
    })

    this.todoInput = new TodoInput({
      targetButton: $('#add-todo-button'),
      targetInput: $('#todo-input'),
      inputEvent: async (inputValue) => {
        await addTodo(this.username, inputValue)
        this.setState();
      },
    })

    this.todoRemoveAll = new TodoRemoveAll({
      targetButton: $('#removeall-button'),
      onRemoveAll : async () => {
        await removeAllTodo(this.username)
        this.setState()
      },
    })

    this.setState()
  }

  async setState() {
    this.todoList.setState(null);
    const updatedData = await getTodo(this.username, 300)
    this.todoList.setState(updatedData)
  }
}
