import { ENTER_KEY } from '../utils/constants.js'

export default function TodoInput({ $todoInput, onInput }) {
  this.inputValue = ''
  
  $todoInput.addEventListener('keypress', (event) => {
    if (event.keyCode === ENTER_KEY) {
      onInput(event.target.value)
      $todoInput.value = ''
    }
  })

  this.setState = (nextData) => {
    this.inputValue = nextData
  }

}