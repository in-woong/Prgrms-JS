import { checkElement, checkString, ERROR_MSG } from '../utils.js'

export default function SearchError({ $target, errorMessage = '' }) {
  if (!checkElement($target)) throw new Error(ERROR_MSG.ELEMENT)
  if (!checkString(errorMessage)) throw new Error(ERROR_MSG.STRING)
  this.$target = $target
  this.errorMessage = errorMessage

  this.setState = msg => {
    if (!checkString(msg)) throw new Error(ERROR_MSG.STRING)
    this.errorMessage = msg
    this.render()
  }

  this.render = () => {
    this.$target.innerText = this.errorMessage
  }

  this.render()
}
