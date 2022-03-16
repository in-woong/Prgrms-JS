import { checkDataValidation } from './utils.js'

function UserName($element, initialState) {
  if (!$element) throw new Error('Element Invalid!')

  this.state = initialState || []

  this.setState = (nextData = []) => {
    this.state = nextData
    this.render()
  }

  this.render = () => {
    $element.innerHTML = `
    선택된 유저 : ${this.state}
    `
  }
  this.render()
}

export default UserName
