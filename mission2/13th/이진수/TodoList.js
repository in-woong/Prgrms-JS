import {
  checkDataValidation,
  setSelectedIdToCompleted,
  setSelectedIdDelete,
} from './utils.js'

function TodoList($element, data, modifyTodo) {
  if (!new.target) throw new Error('Using new Keword!')
  if (!checkDataValidation(data)) throw new Error('Data Invalid!')
  if (!$element) throw new Error('Element Invalid!')

  this.state = data

  this.setState = (nextData = []) => {
    if (!checkDataValidation(nextData)) throw new Error('Data Invalid!')
    this.state = nextData
    this.render()
  }

  this.render = () => {
    const _todos = this.state.map((row, index) => {
      const { text = '', isCompleted } = row
      const deleteButton = `<button id=delete_${index}>삭제</button>`
      const textSpan = `<span id=text_${index} style="cursor: pointer">${text}</span>`

      return isCompleted
        ? `<li id=${index}><s>${textSpan}</s>${deleteButton}</li>`
        : `<li id=${index}>${textSpan}${deleteButton}</li>`
    })
    $element.innerHTML = `<ul>${_todos.join('')}</ul>`
  }
  this.render()

  $element.addEventListener('click', (event) => {
    if (!event?.target?.id) return
    const [type, id] = event.target.id.split('_')

    switch (type) {
      case 'text': {
        modifyTodo(setSelectedIdToCompleted(this.state, id))
        return
      }
      case 'delete': {
        modifyTodo(setSelectedIdDelete(this.state, id))
        return
      }
      default:
        return
    }
  })
}

export default TodoList
