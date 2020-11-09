import { checkTodoListData } from '../data/validation.js'

export default class TodoList {
  constructor({ data, domElement }) {
    checkTodoListData(data)
    this.data = data
    this.domElement = domElement
    this.todoListComponent = domElement.querySelector('#todo-component')

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
    this.todoListComponent.addEventListener('click', clickTodoCardHandler)

    this.render()
  }

  render() {
    const dataHtmlString = this.data
      .map((dataElement, index) => {
        const className = dataElement.isCompleted
          ? 'todo completed-todo'
          : 'todo'
        return `<li key="${index}" class="${className}" >${dataElement.text}
        <button key="${index}" type='text' id="todo-delete-button" class='todo-delete-button'>X</button>
        </li>`
      })
      .join('')
    this.todoListComponent.innerHTML = dataHtmlString
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
    this.data[togleDataIndex].isCompleted = !this.data[togleDataIndex]
      .isCompleted
    this.render()
  }
}
