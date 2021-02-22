import { isNew } from '../common/validateData.js'

function TodoInput({ $interfaceDOM, onKeyUpTodoList }) {
  if (isNew(new.target)) {
    const $todoInputDOM = document.createElement('input')
    $todoInputDOM.type = 'text'
    $todoInputDOM.id = 'todo-input'
    $todoInputDOM.placeholder = '할 일 ; 할 일...'

    $interfaceDOM.appendChild($todoInputDOM)

    $todoInputDOM.addEventListener('keyup', onKeyUpTodoList)
  }

  this.setState = () => {}
  this.render = () => {}
}

export default TodoInput
