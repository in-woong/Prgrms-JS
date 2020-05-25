import { checkUsers } from '../utils/validation.js'

export default function TodoUsers(props) {
  if (new.target !== TodoUsers) {
    throw new Error('Please use \'new\' keyword')
  }
  const { selector, users, onChangeUser } = props
  checkUsers(users)

  this.init = () => {
    const $target = document.querySelector(selector)
    const $box = document.createElement('section')
    $box.className = 'user-section'

    this.$userList = document.createElement('ul')
    this.$userList.innerHTML = users.map((user) => `<li>${user}</li>`).join('')

    $box.appendChild(this.$userList)
    $target.appendChild($box)
    this.bindEvent()
  }

  this.bindEvent = () => {
    this.$userList.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'li') {
        onChangeUser(e.target.innerText)
      }
    })
  }

  this.init()
}
