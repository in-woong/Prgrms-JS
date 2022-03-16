function TodoCount($target, todoState) {
  this.state = todoState

  const calculateIsCompleted = () => {
    return this.state.filter((todo) => todo.isCompleted === true).length
  }

  const div = document.createElement('div')
  div.innerHTML = `
    <span class="todo-count">전체 todo ${
      todoState.length
    }</span> <span class="completed-count">완료한 todo  ${calculateIsCompleted()}</span>
  `
  $target.appendChild(div)

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    div.innerHTML = `
    <span class="todo-count">전체 todo ${
      this.state.length
    }</span> <span class="completed-count">완료한 todo  ${calculateIsCompleted()}</span>
  `
  }
}
