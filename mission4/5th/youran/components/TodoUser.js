import { validateString } from '../utils/validator.js'
import { handleError } from '../utils/service.js'
import { MESSAGE } from '../utils/constants.js'

function TodoUser(username, $target) {
  try {
    this.username = validateString(username)
    this.$target = $target
  } catch (error) {
    handleError.call(this, error)
  }

  this.render = () => {
    this.$target.innerHTML =
      this.username.length > 0
        ? `<h2>${this.username}'s going to do...</h2>`
        : `<h3>${MESSAGE.TODO_USER_EMPTY}</h3>`
  }

  this.setState = nextData => {
    try {
      this.username = validateString(nextData)
    } catch (error) {
      handleError.call(this, error)
    }
    this.render()
  }

  this.render()
}

export default TodoUser
