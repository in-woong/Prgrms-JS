import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'

const App = function () {
  if (!JSON.parse(localStorage.getItem('todoList'))) {
    localStorage.setItem('todoList', JSON.stringify([]))
  }
  const that = this
  this.$target = document.querySelector('#app')
  this.todos = JSON.parse(localStorage.getItem('todoList'))
  this.render = function () {
    this.$target.innerHTML = this.template()
    this.mount()
  }
  this.mount = function () {
    const todoList = document.querySelector('.todo-list-component')
    const todoInput = document.querySelector('.todo-input-component')
    const todoCount = document.querySelector('.todo-count-component')
    new TodoList(todoList, this.todos, update)
    new TodoCount(todoCount, this.todos)
    new TodoInput(todoInput, addTodo, removeAll)
  }
  this.template = function () {
    return `
      <div class='todo-list-component'></div>
      <div class='todo-input-component'></div>
      <div class='todo-count-component'></div>
      `
  }
  this.setState = function (nextData) {
    if (nextData.length > 0) checkArrayType(nextData)
    localStorage.setItem('todoList', JSON.stringify(nextData))
    this.todos = JSON.parse(localStorage.getItem('todoList'))
    this.render()
  }
  const addTodo = function (todo) {
    that.setState([...that.todos, todo])
  }
  const removeAll = function () {
    that.setState([])
  }
  const update = function () {
    localStorage.setItem('todoList', JSON.stringify(that.todos))
    that.render()
  }
  const checkArrayType = function (data) {
    if (!Array.isArray(data))
      throw new Error('데이터의 타입이 배열이 아닙니다..')
    if (data.every(({ text }) => typeof text !== 'string'))
      throw new Error('text 값이 존재하지 않습니다.')
    if (data.every(({ isCompleted }) => typeof isCompleted !== 'boolean'))
      throw new Error('isCompleted 값이 존재하지 않습니다.')
    if (typeof data.text === 'string')
      throw new Error('text 데이터의 타입이 맞지않습니다.')
    if (typeof data.isCompleted === 'boolean')
      throw new Error('isCompleted 데이터의 타입이 맞지않습니다.')
  }
  this.render()
}
new App()
