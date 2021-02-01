import validateData, { isNew, checkDom, raiseEexcetion } from './validateData.js'
import { setBackUpTodo } from './util.js'
import { METHOD } from './METHOD_LIST.js'
import { ERROR_MSG } from './ERROR_MSG.js'

// 전체 랜더링
const renderTodo = ({ text, isCompleted }) => {
  return `<div class="todo-text">
           <div class="todo-checkbox${isCompleted ? ' checked' : ''}"></div><p class=${isCompleted ? 'strket-text ' : ''}>${text}</p>
            <div class="del-btn"></div>
          </div>`
}

function TodoList({ todoData, $listDOM, listHandler }) {
  if (isNew(new.target)) {
    if (todoData.length !== 0) validateData(todoData)
    checkDom($listDOM)
    $listDOM.addEventListener('click', listHandler)
  }

  this.render = () => {
    validateData(todoData)
    $listDOM.innerHTML = todoData.map(renderTodo).join('')
  }

  this.updateTarget = (targetDOM) => {
    targetDOM.classList.toggle('checked')
    targetDOM.nextSibling.classList.toggle('strket-text')
  }

  this.deleteTarget = (targetDOM) => {
    $listDOM.removeChild(targetDOM)
  }

  // this.appendChild = (targetDOM) => {
  //   $listDOM.appendChild()
  // }

  this.setState = (nextData, targetDOM, method) => {
    todoData = validateData(nextData)
    setBackUpTodo(todoData)

    switch (method) {
      case METHOD.UPDATE:
        this.updateTarget(targetDOM)
        break
      case METHOD.DELETE:
        this.deleteTarget(targetDOM)
        break

      // case METHOD.APPEND:
      //   this.appendChild()
      //   break

      case METHOD.CREATE:
      case METHOD.RESET:
        this.render()
        break
      default:
        raiseEexcetion(ERROR_MSG.RIASE_EXCEPTION)
    }
  }

  this.render()
}

export default TodoList
