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

  $input.addEventListener('keypress', event => {

    if( event.key === 'Enter') {  
      const text = event.target.value

      if(text === '') {
        $input.focus()
        // throw new Error ('Please enter your todo-item')
        return
      }

      onAddTodoItem(text)

      event.target.value = ''
      $input.focus()
    }
  })

  $inputButton.addEventListener('click', () => {
    const text = $input.value
    onAddTodoItem(text)
    $input.value = ''
  })

  this.render = () => {}

}
