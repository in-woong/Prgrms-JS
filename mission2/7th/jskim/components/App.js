import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import { todosValidation } from '../utils/validation.js'

export default class App {
  constructor() {
    this.todos = []
    const todoContainer = document.querySelector('#todo-container')

    try {
      if (localStorage.getItem('TODO_LIST')) {
        this.todos = JSON.parse(localStorage.getItem('TODO_LIST'))
      }

      todosValidation(this.todos)
      this.todoInput = new TodoInput(this.addTodoItem, this.removeAllTodo)
      this.todoList = new TodoList(
        this.todos,
        this.onToggleComplete,
        this.onRemoveTodo
      )
      this.todoCount = new TodoCount(this.todos)
      todoContainer.appendChild(this.todoInput.todoInputFormElement)
      todoContainer.appendChild(this.todoCount.todoCountElement)
      todoContainer.appendChild(this.todoList.todoListContainer)
      this.todoInput.bindingEvent()

      this.todoList.render()
    } catch (err) {
      alert(err.message)
    }
  }

  addTodoItem = (text) => {
    if (text) {
      this.todos = [
        ...this.todos,
        {
          id: Date.now(),
          text: text,
          isCompleted: false,
        },
      ]
      this.setState(this.todos)
    } else {
      alert('Text를 입력해주세요!')
    }
  }

  onToggleComplete = (index) => {
    if (this.todos[index]) {
      this.todos[index].isCompleted = !this.todos[index].isCompleted
      this.setState(this.todos)
    } else {
      throw new Error('해당 Todo가 존재하지 않습니다.')
    }
  }

  onRemoveTodo = (index) => {
    if (this.todos[index]) {
      this.todos = this.todos.filter((todo, idx) => idx !== index)
      this.setState(this.todos)
    } else {
      throw new Error('해당 Todo가 존재하지 않습니다.')
    }
  }

  removeAllTodo = () => {
    this.todos = []
    this.setState(this.todos)
  }

  setState = (nextData) => {
    this.todos = nextData
    localStorage.setItem('TODO_LIST', JSON.stringify(nextData))
    this.todoCount.setState(nextData)
    this.todoList.render(nextData)
    if (this.todos.length > 0) {
      this.todoList.bindEvent()
    }
  }
}
