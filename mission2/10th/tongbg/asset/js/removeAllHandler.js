import { setBackUpTodo } from './util.js'

function removeAllHandler(e) {
  const { todoList, todoCount, $inputDOM } = this

  this.todoData = []
  todoList.setState(this.todoData)
  todoCount.setState(this.todoData)

  $inputDOM.focus()
}

export default removeAllHandler
