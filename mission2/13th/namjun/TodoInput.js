'use strict'

function TodoInput($target, addTodo) {
  const form = document.createElement('form')
  const input = document.createElement('input')
  input.type = 'text'
  const button = document.createElement('button')
  button.textContent = '할 일 추가하기'
  form.appendChild(input)
  form.appendChild(button)

  $target.appendChild(form)

  const removeButton = new TodoRemoveButton(form)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value) {
      addTodo(input.value)
      input.value = ''
      input.focus()
    }
  })

  this.render = () => {
    $target.innerHtml = form
  }

  this.render()
}
