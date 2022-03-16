function TodoRemoveButton($target) {
  const button = document.createElement('button')
  button.innerHTML = '모든 할 일 삭제하기'
  button.classList.add('button-remove-todo-all')
  $target.appendChild(button)

  const removeTodoEvent = new Event('remove-all-todo', { bubbles: true })

  button.addEventListener('click', (e) => {
    if (e.target.classList.value === 'button-remove-todo-all') {
      window.dispatchEvent(removeTodoEvent)
    }
  })
}
