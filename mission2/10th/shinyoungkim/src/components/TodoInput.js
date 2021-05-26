import { checkInputValue } from '../utils/validation.js'

export default function TodoInput({ $app, onChange }) {
  const $inputWrap = document.createElement('div')
  $inputWrap.className = 'input-wrap'

  const $input = document.createElement('input')
  $input.className = 'input'
  $input.placeholder = 'Press the Enterkey and Press the button to add it.'

  const $inputButton = document.createElement('button')
  $inputButton.className = 'input__button'
  $inputButton.type = 'text'
  $inputButton.textContent = 'ADD'

  $inputWrap.appendChild($input)
  $inputWrap.appendChild($inputButton)
  $app.appendChild($inputWrap)

  this.createTodoItem = () => {
    const text = $input.value.trim()

    if (!text) {
      checkInputValue(text)
      $input.focus()
      return
    }

    onChange(text)
    
    $input.value = ''
    $input.focus()
  }

  $input.addEventListener('keypress', event => {
    if( event.key === 'Enter') {  
      this.createTodoItem()
    }
  })

  $inputButton.addEventListener('click', () => {
    this.createTodoItem()
  })

  this.render = () => {}

}
