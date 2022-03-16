function TodoList($target, initialState, checkCompletedTodo) {
  const ol = document.createElement('ol')
  $target.appendChild(ol)
  this.data = initialState

  this.render = function () {
    ol.innerHTML = this.data
      .map(
        (todo, idx) =>
          `<li data-index=${idx} class="todoList__item"> ${
            todo.isCompleted ? `<s>${todo.text}</s>` : `${todo.text} ✅`
          }</li>`
      )
      .join('')
  }

  this.setState = (nextState) => {
    this.data = nextState
    this.render()
  }

  ol.addEventListener('click', (e) => {
    const { index: indexString } = e.target.closest('.TodoList__item').dataset
    // number vs parseInt 차이점 파악
    const index = parseInt(indexString)
    this.data[index].isCompleted = !this.data[index].isCompleted
    checkCompletedTodo([...this.data])
  })

  this.render()
}
