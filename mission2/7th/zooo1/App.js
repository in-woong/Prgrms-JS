import TodoList from './todoList.js'
import TodoInput from './todoInput.js'
import TodoCount from './todoCount.js'

export default class App {
  constructor() {
    // this.data = data
    console.log(window.localStorage.getItem('todo'))
    this.data = window.localStorage.getItem('todo')
      ? JSON.parse(window.localStorage.getItem('todo'))
      : []
    this.todoInput = new TodoInput(this)
    this.todoList = new TodoList(this.data)
    this.todoCount = new TodoCount()
  }
  render(target) {
    this.checkDataValid()
    this.todoInput.render(target)
    this.todoList.render(target, this.todoCount)
    this.todoInput.handleUserInput(this.todoList, this.todoCount)

    this.bindEventHandler()
  }

  checkDataValid() {
    try {
      if (!this.data || !Array.isArray(this.data)) {
        throw new Error('데이터가 비어있거나 배열형태가 아닙니다.')
      } else if (!this.data.every((info) => typeof info.text === 'string')) {
        throw new Error('데이터의 형태가 문자열이 아닙니다.')
      }
    } catch (e) {
      alert(e)
    }
  }

  bindEventHandler() {
    const removeAllBtn = document.getElementById('remove-all-btn')
    removeAllBtn.addEventListener(
      'remove-all',
      () => {
        this.removeAll()
      },
      false
    )
  }

  removeAll() {
    Array.from(this.todoList.ul.children).map((child) => {
      child.remove()
    })
    localStorage.clear()
    this.todoList.data = []
    this.todoCount.render()
  }
}
