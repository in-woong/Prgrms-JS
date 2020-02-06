export default function TodoCount(todoItems) {
  this._totalCount = 0
  this._completedCount = 0

  this._render = () => {
    document.querySelector('#todo-count .count').innerHTML = this._totalCount
    document.querySelector('#completed-count .count').innerHTML = this._completedCount
  }

  this._setState = () => {
    this._totalCount = todoItems.length
    this._completedCount = todoItems.filter((item) => item.isCompleted).length
    this._render()
  }

  this.init = () => {
    this._setState()
  }
}
