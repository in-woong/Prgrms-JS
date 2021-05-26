import { checkNewKeyword } from '../utils/validation.js'

export default function TodoCount ({ $app, initialState }) {

  this.state = initialState

  const $target = document.createElement('div')
  $target.className = 'todo-status'
  $app.appendChild($target)

  this.$target = $target

  this.checkValuedate = () => {
    checkNewKeyword(this)
  }

  this.getTodoStateInfo = () => ({
    todoTotalCount: this.state.length,
    todoCompletedCount: this.state.filter(todo => todo.isCompleted).length
  })

  this.render = () => {
    const { todoTotalCount, todoCompletedCount } = this.getTodoStateInfo()

    this.$target.innerHTML = `
      <li>Total<strong>${todoTotalCount}</strong></li>
      <li>Completed<strong>${todoCompletedCount}</strong></li>
    `
  }

  this.setState = (nextState) => {
    this.checkValuedate(nextState)
    this.state = nextState
    this.render()
  }

  this.checkValuedate(this.state)
  this.render()
}