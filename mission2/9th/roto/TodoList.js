export default function TodoList({ $app, initialState }) {
  const $target = document.createElement('div')
  $target.className = 'TodoList'
  $app.appendChild($target)
  this.$target = $target
  this.state = initialState

  this.render = function () {
    this.$target.innerHTML = this.state
      .map((todo) => `<div>${todo.text}</div>`)
      .join('')
  }

  this.setState = function (nextState) {
    this.state = nextState
    this.render()
  }

  this.render()
}
