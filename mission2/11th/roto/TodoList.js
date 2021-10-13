function TodoList({ $app, initialState, onTodoClick }) {
  this.onTodoClick = onTodoClick
  this.$target = document.createElement('ul')
  this.state = initialState

  $app.appendChild(this.$target)

  // 이벤트 위임
  this.$target.addEventListener('click', (e) => {
    const $target = e.target.closest('li')
    if ($target) {
      const { index } = $target.dataset
      onTodoClick(parseInt(index))
    }
  })

  this.render = function() {
    this.$target.innerHTML = this.state
      .map(({ text, isCompleted }, index) => `<li data-index="${index}">${isCompleted ? `<s>${text}</s>` : text}</li>`)
      .join('')
  }

  this.setState = function(nextState) {
    this.state = nextState
    this.render()
  }

  this.render()
}
