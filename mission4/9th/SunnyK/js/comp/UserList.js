import { createElementWithClass } from '../util/util.js'

export default function UserList({ $parent, users, onSelectUser }) {
  this.$target = createElementWithClass({
    tagName: 'aside',
    className: 'UserList',
  })
  $parent.appendChild(this.$target)

  this.users = users
  this.onSelectUser = onSelectUser

  this.$target.addEventListener('click', (e) => {
    if (e.target.className === 'user-btn') {
      this.onSelectUser(e.target.innerHTML)
    }
  })

  this.setState = (nextUsers) => {
    this.users = nextUsers
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = `
      <h2 class="aside-title">Users</h2>
      <ul>
        ${this.users
          .map((user) => `<li><button class="user-btn">${user}</button></li>`)
          .join('')}
      </ul>
    `
  }

  this.render()
}
