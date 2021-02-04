import { 
  checkNewKeyword,
  checkArrayType, 
  checkTarget, 
  checkTypes,
  checkProperty
 } from '../utils/validation.js'


export default function TodoList({ $app, initialState, onRemove, onToggle }) {

  this.state = initialState

  const $target = document.createElement('ul')
  $target.className = 'todo-list'
  $app.appendChild($target)
  
  this.$target = $target

  this.checkValidate = (state) => {
    checkNewKeyword(this);
    checkArrayType(state)
    checkTarget(this.$target)

    state.forEach((state) => {
      checkTypes(state)
      checkProperty(state)
    })
  }

  this.render = () => {
    const stringHTML =
      this.state.length > 0 ? 
        this.state.map(( {text, isCompleted }, index) => 
          `<li class="item" data-index="${index}">
            ${ isCompleted ? `<input type="checkbox" checked>`: `<input type="checkbox">`}
            ${ isCompleted ? `<p class="text completed">${text}</p>` : `<p class="text">${text}</p>` } 
            <button type="button" class="button button--delete" data-id="${index}">X</button>
          </li>`
        ).join('')
      : ''
    this.$target.innerHTML = stringHTML
  }

  this.handleClick = () => {
    this.$target.addEventListener('click', event => {
      const currentItem = event.target

      if (currentItem.nodeName === 'BUTTON') {
        const deleteIndex = parseInt(currentItem.getAttribute('data-id'))
        onRemove(deleteIndex)
  
      } else if (currentItem.parentNode.nodeName === 'LI') {
        const toggleIndex = parseInt(currentItem.parentNode.getAttribute('data-index'))
        onToggle(toggleIndex)
  
      } else {
        return
      }
    })
  } 

  this.setState = (nextState) => {
    this.checkValidate(nextState)
    this.state = nextState
    this.render()
  }

  this.handleClick()
  this.checkValidate(this.state)
  this.render()
}
