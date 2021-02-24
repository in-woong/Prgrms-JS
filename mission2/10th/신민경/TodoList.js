function TodoList($target, data) {
  this.$target = $target
  this.data = data

  this.render = function() {
    this.$target.innerHTML = this.data
      .map((todo) => `<div data-id=${this.data.indexOf(todo)}>${todo.isCompleted ? `<s>${todo.text}</s> : ${todo.text}</div>`)
      .join('')

    this.$target.querySelector('div').addEventListener('click', (e) => {
      this.data[e.target.dataset.id].isCompleted = True
      this.render()
    })
  }

  this.setState = function(nextData) {
    this.data = nextData
    this.render()
  }

  this.render()
}
