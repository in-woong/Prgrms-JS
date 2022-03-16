import { validateInstance } from './validation.js'

function TodoCount({ $app, state }) {
  validateInstance(this, TodoCount)
  this.state = state

  this.$todoCount = document.createElement('div')
  $app.appendChild(this.$todoCount)

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }

  this.render = () => {
    const totalTodoCount = this.state.length
    const completedTodoCount = this.state.filter((todo) => todo.isCompleted)
      .length

    this.$todoCount.innerHTML = `
      <span>총: ${totalTodoCount}개</span> &nbsp
      <span>완료: ${completedTodoCount}개</span>`
  }

  this.render()
}

export default TodoCount
