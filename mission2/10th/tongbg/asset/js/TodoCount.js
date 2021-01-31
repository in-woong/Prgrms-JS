import { isNew } from './validateData.js'

function TodoCount({ todoData, $countDOM }) {
  if (isNew(new.target)) this.todoTotalCount = todoData.length

  this.setState = (nextData) => {
    this.todoTotalCount = nextData.length
    this.render()
  }

  this.render = () => {
    $countDOM.innerHTML = `<p> TOTOAL : ${this.todoTotalCount}</p>`
  }

  this.render()
}

export default TodoCount
