import { validateArray } from '../utils/validator.js'
import { handleError } from '../utils/service.js'
import { MESSAGE } from '../utils/constants.js'

function Users(data, $target, { onChangeUser }) {
  try {
    this.data = validateArray(data)
  } catch (error) {
    handleError.call(this, error)
    this.data = []
  }
  this.$target = $target
  this.onChangeUser = onChangeUser

  this.$target.addEventListener('click', event => this.handleEvent(event))

  this.handleEvent = event => {
    // 보일러플레이트 코드에서 수정
    const li = event.target.closest('li')
    if (!li) return

    event.stopPropagation()
    onChangeUser(li.dataset.username)
  }

  this.setState = nextData => {
    try {
      this.data = validateArray(nextData)
    } catch (error) {
      handleError.call(this, error)
      this.data = []
    }

    this.render()
  }

  this.render = () => {
    $target.innerHTML = this.generateHTMLString()
  }

  this.generateHTMLString = () => {
    if (this.data.length < 1) {
      return `<p>${MESSAGE.USER_EMPTY}</p>`
    }
    const htmlString = this.data
      .map(username => `<li data-username="${username}">${username}</li>`)
      .join('')

    return `<ul>${htmlString}</ul>`
  }

  this.render()
}

export default Users
