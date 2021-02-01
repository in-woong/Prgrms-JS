import validateData, { isNew, checkDom, raiseEexcetion } from './validateData.js'
import { setBackUpTodo } from './util.js'
import { METHOD } from './METHOD_LIST.js'
import { ERROR_MSG } from './ERROR_MSG.js'

function TodoList({ todoData, $listDOM, listHandler }) {
  if (isNew(new.target)) {
    if (todoData.length !== 0) validateData(todoData)
    checkDom($listDOM)
    $listDOM.addEventListener('click', listHandler)
  }

  this.render = () => {
    validateData(todoData)
    todoData.forEach(this.appendTodoList)
  }

  this.updateTarget = ($targetDOM) => {
    $targetDOM.classList.toggle('checked')
    $targetDOM.nextSibling.classList.toggle('strket-text')
  }

  this.deleteTarget = ($targetDOM) => {
    $listDOM.removeChild($targetDOM)
  }

  this.appendTodoList = ({ text, isCompleted }) => {
    let newDiv = document.createElement('div')

    newDiv.className = 'todo-text'
    newDiv.innerHTML = `<div class="todo-checkbox${isCompleted ? ' checked' : ''}"></div><p ${isCompleted ? 'class=strket-text' : ''}>${text}</p><div class="del-btn"></div>`
    $listDOM.appendChild(newDiv)
  }

  this.reset = () => {
    $listDOM.innerHTML = ''
  }

  this.setState = (nextData, $targetDOM, method, appendData) => {
    todoData = validateData(nextData)
    setBackUpTodo(todoData)

    switch (method) {
      case METHOD.UPDATE:
        this.updateTarget($targetDOM)
        break
      case METHOD.DELETE:
        this.deleteTarget($targetDOM)
        break
      case METHOD.APPEND:
        appendData.forEach(this.appendTodoList)
        break
      case METHOD.CREATE:
        this.render()
        break
      case METHOD.RESET:
        this.reset()
        break
      default:
        raiseEexcetion(ERROR_MSG.RIASE_EXCEPTION)
    }
  }

  this.render()
}

export default TodoList
