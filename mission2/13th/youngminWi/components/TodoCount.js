function TodoCount({ $app, initState }) {
  this.$target = document.createElement('span')
  this.$target.className = 'todo__count'
  $app.appendChild(this.$target)

  this.state = initState

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }

  this.render = () => {
    const completed = this.state.filter((todo) => todo.isCompleted)?.length
    this.$target.innerHTML = `총 할 일의 수 : ${this.state.length}<br />완료한 할 일의 수 ${completed}`
  }

  this.render()
}

export default TodoCount
