function TodoCount({ $target, state }) {
  if (!new.target) {
    throw new Error(ErrorMessage.SET_NEW_ERROR)
  }
  this.$target = $target
  this.$todoCountDiv = document.createElement('div')
  this.$target.appendChild(this.$todoCountDiv)
  this.state = state

  this.setState = function (nextState) {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.$todoCountDiv.innerHTML = `<p> Todo Count: ${this.state.todos.length}</p>`
  }

  this.render()
}
export default TodoCount
