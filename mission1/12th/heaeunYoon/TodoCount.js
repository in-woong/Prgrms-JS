function TodoCount({ $app, state, title }) {
  this.state = state
  this.title = title
  this.$target = document.createElement('p')

  $app.appendChild(this.$target)

  this.setState = (nextState) => {
    this.state = nextState

    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = `
      ${this.title} ? ${this.state}개
    `
  }

  this.render()
}

export default TodoCount
