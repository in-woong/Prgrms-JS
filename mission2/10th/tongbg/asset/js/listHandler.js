import { METHOD } from './METHOD_LIST.js'

function listHandler(e) {
  const { todoList, todoCount, $listDOM, $inputDOM } = this
  const targetIdx = Array.from($listDOM.childNodes).indexOf(e.target.parentNode)

  switch (e.target.className) {
    case 'todo-checkbox':
    case 'todo-checkbox checked':
      // let { text, isCompleted } = this.todoData[targetIdx]
      // this.todoData.splice(targetIdx, 1, { text, isCompleted: !isCompleted })

      this.todoData = this.todoData.map(({ text, isCompleted }, idx) => {
        return idx === targetIdx ? { text, isCompleted: !isCompleted } : { text, isCompleted }
      })

      todoList.setState(this.todoData, e.target, METHOD.UPDATE)

      $inputDOM.focus()
      break

    case 'del-btn':
      this.todoData = this.todoData.filter((todo, idx) => idx !== targetIdx)

      todoList.setState(this.todoData, e.target.parentNode, METHOD.DELETE)
      todoCount.setState(this.todoData)

      $inputDOM.focus()
      break
  }
}

export default listHandler
