import { validateInstance } from '../validator.js'

export default function UserList(users, {onClick}) {
  validateInstance(this, UserList)

  this.users = users || []
  const $userList = document.querySelector('#user-list')

  $userList.addEventListener('click', e => {
    const target = e.target

    if (target.closest('li')) {
      onClick(target.textContent)
    }
  })

  this.render = function () {
    const htmlString = this.users.map((user) => {
      return `<li>${user}</li>`
    }).join('')

    $userList.innerHTML = `<ul class="users">${htmlString}</ul>`
  }

  this.setState = function (nextData) {
    this.users = nextData
    this.render()
  }
}