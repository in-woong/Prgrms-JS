function UserName({ $target, state }) {
  if (!new.target) {
    throw new Error(ErrorMessage.SET_NEW_ERROR)
  }
  this.$target = $target
  this.state = state
  this.$UserName = document.createElement('h2')
  this.$UserName.classList.add('userName')
  this.$target.appendChild(this.$UserName)

  this.setState = function (nextState) {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.$UserName.innerHTML = `${this.state.userName}의 TodoList입니다`
  }

  this.render()
}

export default UserName
