import { 
  checkNewKeyword,
  checkArrayType, 
  checkTarget, 
  checkTypes,
  checkProperty
 } from '../utils/validation.js'


export default function TodoList({$app, initialState}) {

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
    const stringHTML = this.state.map(( {text, isCompleted }, index) => 
      `<li data-id="${index}">
         <div>
          ${ isCompleted ? `<s>${text}</s>` : text } 
          <button type="button" class="button">DELETE</button>
         </div>
      </li>`
    ).join('')

    this.$target.innerHTML = stringHTML
  }

  this.setState = (nextData) => {
    this.checkValidate(nextData)
    this.state = nextData
    this.render()
  }

  this.checkValidate(this.state)
  this.render()
}
