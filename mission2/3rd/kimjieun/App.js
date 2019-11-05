// todoList, todoInput 관리 컴포넌트
import error from './error.js'
export default class App {
  constructor({ todoList, todoInput, todoCount, data }) {
    // component
    this.todoList = todoList
    this.todoInput = todoInput
    this.todoCount = todoCount
    // data
    this.data = data
    this.setState(this.data)
    // etc
    this.init()
    this.$todoInputEl = document.getElementById("todo-input")
  }

  checkValidData(data) {
    if (!Array.isArray(data)) throw new Error(error.NORARRAY_DATA)
  
    data.forEach(data => {
      if (!data.hasOwnProperty('text')) throw new Error(error.INVALID_DATA)
    })
  }

  setState(data) {
    this.checkValidData(data)
    this.data = data
    this.render()
  }

  init() {
    this.todoList.toggleCompleteTodo = this.toggleTodo.bind(this)
    this.todoList.onDeleteTodo = this.deleteTodo.bind(this)
    this.todoInput.onAddTodo = this.addTodo.bind(this)
  }

  render() {
    this.todoList.render(this.data)
    this.todoCount.createCountHTMLString(this.data)
  }

  toggleTodo(todoIndex) {
    const toggledData = this.data
    toggledData[todoIndex] = {
      ...toggledData[todoIndex],
      isCompleted: !toggledData[todoIndex].isCompleted
    }
    // toggledData[todoIndex].isCompleted = !toggledData[todoIndex].isCompleted
    this.setState(toggledData)
  }

  deleteTodo(todoIndex) {
    const deletedData = [...this.data]
    deletedData.splice(todoIndex, 1)
    this.setState(deletedData)
  }

  addTodo(addData) {
    const addedData = [...this.data]
    addedData.push(addData)
    this.setState(addedData)
    this.$todoInputEl.value = ''
    this.$todoInputEl.focus()
  }
}