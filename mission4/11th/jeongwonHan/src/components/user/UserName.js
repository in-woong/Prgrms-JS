function UserName({ $target, state }) {
    this.$target = $target
    this.$UserName = document.createElement('h2')
    this.$UserName.classList.add('userName')
    this.$target.appendChild(this.$UserName)
    this.state = state
  
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
  