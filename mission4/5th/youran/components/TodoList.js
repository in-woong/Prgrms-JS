import { validateArray } from '../utils/validator.js'
import { handleError } from '../utils/service.js'
import { MESSAGE } from '../utils/constants.js'

function TodoList(data, $target, { onToggleTodo, onRemoveTodo }) {
  try {
    this.data = validateArray(data)
  } catch (error) {
    handleError.call(this, error)
  }

  this.$target = $target
  this.onToggleTodo = onToggleTodo
  this.onRemoveTodo = onRemoveTodo

  $target.addEventListener('click', event => this.handleEvent(event))

  this.handleEvent = event => {
    // 보일러플레이트 코드에서 수정
    const li = event.target.closest('li')
    if (!li) return

    if (event.target.className === 'remove-button') {
      event.stopPropagation()
      onRemoveTodo(li.dataset.id)
    } else {
      event.stopPropagation()
      onToggleTodo(li.dataset.id)
    }
  }

  this.setState = nextData => {
    try {
      this.data = validateArray(nextData)
    } catch (error) {
      handleError.call(this, error)
    }
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = this.generateHTMLString()
  }

  this.generateHTMLString = () => {
    if (this.data.length < 1) {
      return `<p>${MESSAGE.TODO_EMPTY}</p>`
    }

    const htmlString = this.data
      .map(
        ({ _id, isCompleted, content }) => `<li data-id="${_id}">
      ${isCompleted ? `<s>${content}</s>` : `${content}`}
      <button class="remove-button">X</button>`
      )
      .join('')

    return `<ul>${htmlString}</ul>`
  }

  this.render()
}

export default TodoList
