function TodoInput({ $app, onAddTodo }) {
  this.$target = document.createElement('div')
  this.onAddTodo = onAddTodo

  $app.appendChild(this.$target)

  this.setState = () => {}
  this.render = () => {
    this.$target.innerHTML = `
      <input type="text">
      <button class="remove-all-button">Remove All</button>
    `
  }

  this.render()

  // event binding
  this.$target.querySelector('input').addEventListener('keydown', (e) => {
    // 여기서 todo list를 어떻게 추가하는가????
    if (e.code === 'Enter') {
      this.onAddTodo(e.target.value)
    }
  })

  this.$target.querySelector('.remove-all-button').addEventListener('click', (e) => {
    const event = new CustomEvent('remove-all')
    window.dispatchEvent(event)
  })
}