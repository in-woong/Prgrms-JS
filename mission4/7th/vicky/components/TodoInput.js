import { ENTER_KEY_CODE } from '../utils/constantKeys.js'

function TodoInput(elementDom, { onAction }) {
  if (!(this instanceof TodoInput)) {
    throw new Error('error: TodoInput must be called with new!')
  }

  this.elementDom = elementDom
  this.onAction = onAction

  this.elementDom.addEventListener('keyup', (event) => {
    const {
      target: { name, value },
      keyCode,
    } = event

    // addList
    if (name === 'addList' && value && keyCode === ENTER_KEY_CODE) {
      const addData = {
        content: event.target.value,
      }
      this.onAction.add(addData)
      event.target.value = ''
    }
  })

  this.elementDom.addEventListener('click', (event) => {
    event.stopPropagation()

    const {
      target: { nodeName, name },
    } = event

    // remove List
    if (nodeName === 'BUTTON' && name === 'deleteList') {
      const {
        target: {
          parentNode: { id },
        },
      } = event
      this.onAction.remove(id)
    }

    // remove All
    if (nodeName === 'BUTTON' && name === 'deleteAllList') {
      this.onAction.removeAll()
    }
  })
}

export default TodoInput
