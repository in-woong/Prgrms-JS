export default function TodoInput({ onAddTodo }) {
  const $todoInput = document.querySelector('#todo_input')
  const $todoAddBtn = document.querySelector('#todo_add_btn')

  this.onAddTodo = onAddTodo

  $todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.onAddTodo(e.target.value)
      e.target.value = ''
    }
  })

  $todoAddBtn.addEventListener('click', (e) => {
    e.preventDefault()
    this.onAddTodo($todoInput.value)
    $todoInput.value = ''
  })

  this.render = () => {}
}
