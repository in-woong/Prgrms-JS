import { METHOD } from './METHOD_LIST.js'

function inputHandler(e) {
  const { $inputDOM, todoList, todoCount } = this
  const textArr = $inputDOM.value.split(/;/).filter((text) => text.trim() !== '')

  if (e.key === 'Enter') {
    const appendData = textArr.map((text) => {
      return { text, isCompleted: false }
    })

    this.todoData = [...this.todoData, ...appendData]

    todoList.setState(this.todoData, todoList, METHOD.APPEND, appendData)
    todoCount.setState(this.todoData)

    $inputDOM.value = null
  }
}

export default inputHandler
