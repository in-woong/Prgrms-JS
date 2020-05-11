import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import { todo } from '../utils/todoList.js'

class App {
  constructor() {
    this.$todoContainer = document.querySelector('#todo-list')
    this.todoListData = this.loadData()
    this.todoInput = new TodoInput(this.addTodoHandler)
    this.todoList = new TodoList(
      this.todoListData,
      this.completeTodoHandler,
      this.deleteTodoHandler
    )

    this.render()
  }

  loadData() {
    if (!localStorage.getItem('todo')) {
      localStorage.setItem('todo', JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem('todo'))
  }

  updateData(newData) {
    localStorage.removeItem('todo')
    localStorage.setItem('todo', JSON.stringify(newData))
  }

  setState(newData) {
    const oldTodoContainer = this.todoList.$todoListContainer

    this.updateData(newData)

    this.todoListData = this.loadData()
    this.todoList = new TodoList(
      this,
      this.todoListData,
      this.completeTodoHandler,
      this.deleteTodoHandler
    )

    this.$todoContainer.replaceChild(
      this.todoList.$todoListContainer,
      oldTodoContainer
    )
  }

  addTodoHandler = (data) => {
    const newTodo = [...this.todoListData, { text: data, isCompleted: false }]
    this.setState(newTodo)
  }

  completeTodoHandler = (idx) => {
    const changedTodo = this.todoListData
      .filter((cur, index) => index === idx)
      .map(({ text, isCompleted }) => ({
        text: text,
        isCompleted: !isCompleted,
      }))

    const newTodo = [
      ...this.todoListData.slice(0, idx),
      ...changedTodo,
      ...this.todoListData.slice(idx + 1),
    ]

    this.setState(newTodo)
  }

  deleteTodoHandler = (idx) => {
    const newTodo = [
      ...this.todoListData.slice(0, idx),
      ...this.todoListData.slice(idx + 1),
    ]
    this.setState(newTodo)
  }

  render() {
    this.$todoContainer.append(
      this.todoInput.$inputContainer,
      this.todoList.$todoListContainer
    )
    this.todoInput.$todoInput.focus()
  }
}

export default App
