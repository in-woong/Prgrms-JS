import { FETCH_USERS_URL } from '../utils/constantKeys.js'

function TodoUsers(elementDom, { onAction }) {
  if (!(this instanceof TodoUsers)) {
    throw new Error('error: TodoUsers must be called with new!')
  }

  this.elementDom = elementDom
  this.onAction = onAction

  this.render = () => {
    this.usersDom = document.querySelector('.usersList ul')

    const htmlString = this.users.map((user) => `<li>${user}</li>`).join('')
    this.usersDom.innerHTML = htmlString
  }

  this.setState = (users) => {
    if (!users.length) {
      return
    }
    this.users = users
    this.render()
  }

  this.elementDom.addEventListener('click', (event) => {
    const {
      innerText,
      parentNode: {
        parentNode: { className },
      },
    } = event.target

    if (className === 'usersList' && innerText) {
      this.onAction.show(innerText)
    }
  })

  this.init = () => {
    const usersDom = document.createElement('div')
    usersDom.className = 'usersList'
    usersDom.innerHTML = '<ul></ul>'
    this.elementDom.appendChild(usersDom)

    this.onAction.search(FETCH_USERS_URL)
  }

  this.init()
}

export default TodoUsers
