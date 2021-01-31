import { isNew, checkDom } from './validateData.js'

function TodoInput({ $inputDOM, inputHandler }) {
  if (isNew(new.target)) {
    $inputDOM.addEventListener('keyup', inputHandler)
  }
}

export default TodoInput
