import { isNew } from '../common/validateData.js'

function TodoCount({ $App, initDodoList }) {
  if (isNew(new.target)) {
    this.todoList = initDodoList

    this.$todoCountDOM = document.createElement('div')
    this.$todoCountDOM.id = 'todo-count'
    this.$todoCountDOM.innerHTML = `<p> TOTOAL : ${this.todoList.length}</p>`

    $App.appendChild(this.$todoCountDOM)
  }

  this.setState = (nextData) => {
    this.todoList = nextData
    this.render()
  }

  this.render = () => {
    this.$todoCountDOM.innerHTML = `<p> TOTOAL : ${this.todoList.length}</p>`
  }

  this.render()
}

export default TodoCount
