import { checkElement, checkString, ERROR_MSG } from '../utils.js'

export default function SearchInput({ $target, inputValue, onSearch }) {
  if (!checkElement($target)) throw new Error(ERROR_MSG.ELEMENT)
  if (!checkString(inputValue)) throw new Error(ERROR_MSG.STRING)
  this.$target = $target
  this.inputValue = inputValue
  this.$target.addEventListener('keyup', onSearch)

  this.setState = text => {
    if (!checkString(text)) throw new Error(ERROR_MSG.STRING)
    this.inputValue = text
    this.render()
  }

  this.render = () => {
    this.$target.inputValue = this.inputValue
  }

  this.render()
}
