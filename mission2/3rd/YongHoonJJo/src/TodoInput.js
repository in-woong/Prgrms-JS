import { setAttr, validateConstructor } from './utils.js'

function TodoInput() {
  validateConstructor.call(this)

  this.$inputComponent = document.createElement('div')  

  this.$inputElem = document.createElement('input')
  setAttr(this.$inputElem, 'type', 'text')

  this.$buttonElem = document.createElement('button')
  this.$buttonElem.innerHTML = 'Add'

  this.$removeAllBtnElem = document.createElement('button')
  this.$removeAllBtnElem.innerHTML = 'Remove All'

  this.$inputComponent.appendChild(this.$inputElem)
  this.$inputComponent.appendChild(this.$buttonElem)
  this.$inputComponent.appendChild(this.$removeAllBtnElem)
}

export default TodoInput