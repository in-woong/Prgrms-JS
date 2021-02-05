export default function TodoInput({ $app, onTodoInput }) {
  const $todoInput = document.createElement('input')
  $app.appendChild($todoInput)

  const $todoListClearBtn = document.createElement('button')
  $todoListClearBtn.appendChild(document.createTextNode('전체삭제'))
  $app.appendChild($todoListClearBtn)

  const $todoInputAddBtn = document.createElement('button')
  $todoInputAddBtn.appendChild(document.createTextNode('추가'))
  $app.appendChild($todoInputAddBtn)
  

  const callOnTodoInput = () => {
    const text = $todoInput.value
    if (text) {onTodoInput(text)
      $todoInput.value = ''}
  }

  $todoInputAddBtn.addEventListener('click', (e) => {
    callOnTodoInput()
  })
  $todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      callOnTodoInput()
    }
  })
  $todoListClearBtn.addEventListener('click', () => {
    window.dispatchEvent(new Event('removeAll'))
  })
  
  this.render = () => {}
}