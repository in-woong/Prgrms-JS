export default function TodoInput({ $target, onAddTodo }) {
  const $todoInput = document.createElement('form')

  $target.appendChild($todoInput)

  this.onAddTodo = onAddTodo

  this.render = () => {
    $todoInput.innerHTML = `
        <input type="text">
        <button>Add Todo</button>
        <button class="remove-all-button" type="button">Remove All</button>
      `
  }

  this.render()

  $todoInput.addEventListener('submit', (e) => {
    e.preventDefault()

    const $input = $todoInput.querySelector('input')
    const { value } = $input

    if (value.length > 0) {
      this.onAddTodo(value)
      $input.value = ''
    }
  })

  $todoInput.addEventListener('click', (e) => {
    if (e.target.className === 'remove-all-button') {
      window.dispatchEvent(new CustomEvent('remove-all-todos'))
    }
  })
}
