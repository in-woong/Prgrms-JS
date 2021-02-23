import { isNew } from '../common/validateData.js'

function TodoCount({ $App, initTodoList }) {
  if (isNew(new.target)) {
    this.todoList = initTodoList

    this.$todoCountDOM = document.createElement('div')
    this.$todoCountDOM.id = 'todo-count'

    $App.appendChild(this.$todoCountDOM)
  }

  this.setState = (nextState) => {
    this.todoList = nextState
    this.render()
  }

  this.render = () => {
    this.$todoCountDOM.innerHTML = this.todoList.length > 0 ? `<p> TOTOAL : ${this.todoList.length}</p>` : ''
  }

  this.render()
}

export default TodoCount
