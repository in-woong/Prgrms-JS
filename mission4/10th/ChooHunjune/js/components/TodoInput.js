export default function TodoInput({ $app, onTodoInput }) {
  // generate todoInput component
  const $todoInput = document.createElement('input')
  $app.appendChild($todoInput)
  const $todoListClearBtn = document.createElement('button')
  $todoListClearBtn.appendChild(document.createTextNode('전체삭제'))
  $app.appendChild($todoListClearBtn)
  const $todoInputAddBtn = document.createElement('button')
  $todoInputAddBtn.appendChild(document.createTextNode('추가'))
  $app.appendChild($todoInputAddBtn)

  $todoListClearBtn.addEventListener('click', () => {
    $app.dispatchEvent(new Event('removeAll'))
  })
  

  const callOnTodoInput = () => {
    const text = $todoInput.value
    if (text && text.length > 0) {
      onTodoInput(text)
      $todoInput.value = ''
    }
  }

  $todoInputAddBtn.addEventListener('click', (e) => {
    callOnTodoInput()
  })
  $todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      callOnTodoInput()
    }
  })
  
  this.render = () => {}
}
