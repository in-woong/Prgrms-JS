import { isNew, checkDom } from './validateData.js'

function TodoInput({ inputDOM, parentDOM, inputHandler }) {
  if (isNew(new.target)) {
    checkDom(parentDOM)
    inputDOM.addEventListener('keyup', inputHandler)
  }
}

export default TodoInput
