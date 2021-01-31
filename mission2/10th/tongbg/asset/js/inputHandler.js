import { setBackUpTodo } from './util.js'

function inputHandler(e) {
  const { $inputDOM, todoList, todoCount } = this
  const textArr = $inputDOM.value.split(/;/).filter((text) => text.trim() !== '')

  if (e.key === 'Enter') {
    const temp = textArr.map((text) => {
      return { text, isCompleted: false }
    })

    this.todoData = [...this.todoData, ...temp]
    setBackUpTodo(this.todoData)

    $inputDOM.value = null

    todoList.setState(this.todoData)
    todoCount.setState(this.todoData)
  }
}

export default inputHandler
