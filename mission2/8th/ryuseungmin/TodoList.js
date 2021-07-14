function TodoList($target, data) {
  this.$target = $target
  this.data = data

  this.render = function () {
    this.$target.innerHTML = this.data
      .map(
        (todo) =>
          `<div>${todo.text} <button onclick="onDelete">삭제</button></div>`
      )
      .join('')
  }

  this.setState = function (nextData) {
    this.data = nextData
    this.render()
  }

  this.render()
}
