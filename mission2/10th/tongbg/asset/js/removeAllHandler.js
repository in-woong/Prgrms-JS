import { METHOD } from './METHOD_LIST.js'

function removeAllHandler(e) {
  const { todoList, todoCount, $inputDOM } = this

  this.todoData = []
  todoList.setState(this.todoData, todoList, METHOD.RESET)
  todoCount.setState(this.todoData)

  $inputDOM.focus()
}

export default removeAllHandler
