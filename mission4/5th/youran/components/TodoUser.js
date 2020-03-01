function TodoUser(username, $target) {
  this.username = username
  this.$target = $target
  console.log(this.username)
  this.render = () => {
    if (!this.username) {
      this.$target.innerHTML = `<h1>사용자를 선택하세요.</h1>`
    }
    this.$target.innerHTML = `<h1>${this.username}</h1>`
  }

  this.setState = nextData => {
    this.username = nextData
    this.render()
  }

  this.render()
}

export default TodoUser
