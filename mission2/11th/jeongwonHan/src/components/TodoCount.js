function TodoCount({ $target, state }) {
  this.$target = $target
  this.$todoCountDiv = document.createElement("div")
  this.$todoCountDiv.setAttribute("data-component-type", "TodoCount")
  this.$target.appendChild(this.$todoCountDiv)
  this.state = state

  this.setState = function (nextState) {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.$todoCountDiv.innerHTML = `<span> Todo Count: ${this.state.length}</span>`
  }

  this.render()
}
export default TodoCount
