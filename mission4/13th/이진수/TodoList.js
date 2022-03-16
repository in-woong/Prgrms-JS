import { checkDataValidation } from './utils.js'

function TodoList($element, data) {
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
      const { _id, content = '', isCompleted } = row
      const deleteButton = `<button id=delete_${_id}>삭제</button>`
      const todoContent = `<span id=text_${_id} style="cursor: pointer">${content}</span>`

      return isCompleted
        ? `<li id=${index}><s>${todoContent}</s>${deleteButton}</li>`
        : `<li id=${index}>${todoContent}${deleteButton}</li>`
    })
    $element.innerHTML = `<ul>${_todos.join('')}</ul>`
  }
  this.render()
}

export default TodoList
