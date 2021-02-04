import { checkInputValue } from '../utils/validation.js'

export default function TodoInput({ $app, onAddTodoItem }) {
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

  function handleEventInput () {
    const text = $input.value

    if(text === '') {
      $input.focus()
      checkInputValue(text)
      
      return
    }

    onAddTodoItem(text)

    $input.value = ''
    $input.focus()
    
  }

  $input.addEventListener('keypress', event => {

    if( event.key === 'Enter') {  
      handleEventInput()
    }
  })

  $inputButton.addEventListener('click', () => {
    handleEventInput()
  })

  this.render = () => {}

}
