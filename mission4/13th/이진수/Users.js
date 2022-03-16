import { checkDataValidation } from './utils.js'

function Users($element, initialState) {
  if (!$element) throw new Error('Element Invalid!')

  this.state = initialState || []

  this.setState = (nextData = []) => {
    this.state = nextData
    this.render()
  }

  this.render = () => {
    const _users = this.state.map((id) => {
      return `<button id=${id}>${id}</button>`
    })
    $element.innerHTML = `
    ${_users.join('')}
    `
  }
  this.render()
}

export default Users
