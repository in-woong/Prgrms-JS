import { validateData, showErrorMessage } from '../util/validator.js'
import { MESSAGE } from '../util/constant.js'

export default function TodoList(todoListData) {
  if (!new.target) {
    throw new Error('new 생성자로 함수를 호출하세요.')
  }

  this.data = todoListData.data
  this.$todoList = document.querySelector(todoListData.selector)
  this.onDeleteTodo = todoListData.onDeleteTodo
  this.onSetTodoCompleted = todoListData.onSetTodoCompleted
  this.onRemoveAllTodo = todoListData.onRemoveAllTodo

  try {
    validateData(this.data)
  } catch (error) {
    showErrorMessage(error)
    return
  }
  /*
  try {
    validateSelector(selector)
  } catch (error) {
    showErrorMessage(error)
    return
  }
*/
  this.$todoList.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      this.onDeleteTodo(e.target.value)
    } else if (e.target.dataset.id) {
      this.onSetTodoCompleted(e.target.dataset.id)
    }
  })

  this.$todoList.addEventListener('removeAll', e => {
    this.onRemoveAllTodo()
  })

  this.render = function() {
    if (this.data.length === 0) {
      this.$todoList.innerHTML = MESSAGE.TODO_NULL_TEXT
      return
    }

    this.$todoList.innerHTML = this.data
      .map(
        item =>
          `<div class="todo-text" data-id=${item.id}>
        ${item.isCompleted ? `<s>${item.text}</s>` : item.text}
        <button class="todo-delete-button" value=${item.id}>삭제</button>
        </div>`
      )
      .join('')
  }

  this.setState = function(nextData) {
    validateData(nextData)
    this.data = nextData
    this.render()
  }

  this.render()
}
