import { checkTodoListData } from './data/validation.js'

export default class TodoList {
  constructor({ data, domId }) {
    checkTodoListData(data)
    this.data = data
    this.domId = domId
  }

  render() {
    const todoListDiv = document.querySelector(this.domId)
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
    todoListDiv.innerHTML = dataHtmlString

    const deleteButtons = document
      .querySelector(this.domId)
      .querySelectorAll('#todo-delete-button')
    deleteButtons.forEach((deleteButton) => {
      deleteButton.addEventListener('click', (e) => {
        const targetKey = e.target.getAttribute('key')
        this.deleteData(targetKey)
      })
    })
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
}
