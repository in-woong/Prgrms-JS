export default function TodoInput({ $app, onSubmit }) {
  this.$target = document.createElement('form')
  this.state = {
    isLoading: false,
  }

  $app.appendChild(this.$target)
  this.$target.addEventListener('submit', (e) => {
    e.preventDefault()
    const $input = this.$target.querySelector('.todo-input')
    onSubmit($input.value)

    $input.value = ''
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = `
      <input type="text" class="todo-input" ${
        this.state.isLoading ? 'disabled' : ''
      }/>
      <button class="add-todo-button" ${
        this.state.isLoading ? 'disabled' : ''
      }>Add</button>
    `
  }

  this.render()
}
