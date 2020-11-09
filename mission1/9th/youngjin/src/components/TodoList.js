import { checkTodoListData } from '../data/validation.js'

export default class TodoList {
  constructor({ data, domId }) {
    checkTodoListData(data)
    this.data = data
    this.domId = domId
    this.domElement = document.querySelector(this.domId)

    const clickTodoCardHandler = (e) => {
      const targetKey = e.target.getAttribute('key')
      if (e.target.id === 'todo-delete-button') {
        const deleteIndex = targetKey
        this.deleteData(deleteIndex)
      } else {
        const toggleIndex = targetKey
        this.toggleDataCompleted(toggleIndex)
      }
      e.stopPropagation()
    }
    this.domElement.addEventListener('click', clickTodoCardHandler)
  }

  render() {
    const dataHtmlString = this.data
      .map((dataElement, index) => {
        const className = dataElement.isCompleted
          ? 'todo completed-todo'
          : 'todo'
        return `<div key="${index}" class="${className}" >${dataElement.text}
        <button key="${index}" type='text' id="todo-delete-button" class='todo-delete-button'>X</button>
        </div>`
      })
      .join('')
    this.domElement.innerHTML = dataHtmlString
  }

  setState(nextDataArray) {
    checkTodoListData(nextDataArray)
    this.data = nextDataArray
    this.render()
  }

  addData(nextData) {
    checkTodoListData([nextData])
    this.data = [...this.data, nextData]
    this.render()
  }

  deleteData(deleteDataIndex) {
    this.data = [
      ...this.data.slice(0, deleteDataIndex),
      ...this.data.slice(deleteDataIndex + 1),
    ]
    this.render()
  }

  toggleDataCompleted(togleDataIndex) {
    console.log('toggleDataIndex', togleDataIndex)
    this.data[togleDataIndex].isCompleted = !this.data[togleDataIndex]
      .isCompleted
    this.render()
  }
}
