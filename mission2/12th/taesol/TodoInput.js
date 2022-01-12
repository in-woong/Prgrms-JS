function TodoInput({ $target, onAddTodo, onRemoveAll }) {
  // input 데이터 추가 관련 로직
  const $todoForm = document.createElement('form')
  $target.appendChild($todoForm)
  const $todoInput = document.createElement('input')
  $todoInput.type = 'text'
  $todoForm.appendChild($todoInput)
  const $addBtn = document.createElement('button')
  $addBtn.textContent = '추가'
  $todoForm.appendChild($addBtn)
  const $removeAllBtn = document.createElement('button')
  $removeAllBtn.className = 'remove-all-btn'
  $removeAllBtn.textContent = '모두 삭제'
  $todoForm.appendChild($removeAllBtn)

  this.onAddTodo = onAddTodo
  this.onRemoveAll = onRemoveAll

  $todoForm.addEventListener('submit', e => {
    e.preventDefault()
    const newTodo = $todoInput.value
    if (newTodo.length > 0) {
      this.onAddTodo(newTodo)
      $todoInput.value = ''
    }
    // 다시 클릭할필요 없이 계속 포커스 해준다.
    $todoInput.focus()
  })

  window.addEventListener('click', e => {
    if (e.target.className === 'remove-all-btn') {
      window.dispatchEvent(new CustomEvent('remove-all-todos'))
    }
  })
}
