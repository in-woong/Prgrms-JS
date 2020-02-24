import { validateData, showErrorMessage } from '../util/validator.js'
import { KEYCODE } from '../util/constant.js'

export default function TodoInput(todoInputData) {
  this.$todoInput = document.querySelector(todoInputData.inputSelector)
  this.$removeAllButton = document.querySelector(
    todoInputData.removeAllSelector
  )
  this.onInsertTodo = todoInputData.onInsertTodo
  this.eventTrigger = todoInputData.eventTrigger
  /*
  try {
    validateSelector(selector)
  } catch (error) {
    showErrorMessage(error)
    return
  }
 */
  this.$todoInput.addEventListener('keyup', e => {
    if (e.keyCode !== KEYCODE.ENTER) return
    if (!e.target.value) {
      alert('할 일이 없어요?')
      return
    }
    this.onInsertTodo(e.target.value)
    this.$todoInput.value = ''
  })

  this.$removeAllButton.addEventListener('click', e => {
    const removeAllEvent = new CustomEvent('removeAll')
    this.eventTrigger(removeAllEvent)
    this.$todoInput.value = ''
  })
}
