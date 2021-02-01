import { METHOD } from './METHOD_LIST.js'

function inputHandler(e) {
  const { $inputDOM, todoList, todoCount } = this
  const textArr = $inputDOM.value.split(/;/).filter((text) => text.trim() !== '')

  if (e.key === 'Enter') {
    const temp = textArr.map((text) => {
      return { text, isCompleted: false }
    })

    this.todoData = [...this.todoData, ...temp]

    // APPEND 로 변경 필요...?
    // todoList.setState(this.todoData, todoList, METHOD.APPEND)

    todoList.setState(this.todoData, todoList, METHOD.CREATE)
    todoCount.setState(this.todoData)

    $inputDOM.value = null
  }
}

export default inputHandler
