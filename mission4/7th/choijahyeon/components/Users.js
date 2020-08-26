import { username } from './App.js'
export default function Users({ target, usernames, changeUser }) {
  this.$target = target
  this.usernames = usernames
  this.$ul = document.createElement('ul')
  this.render = () => {
    const htmlStr = this.usernames
      .map(
        (name) =>
          `<li class="${
            username === name ? 'selected' : ''
          }" id="${name}">${name}</li>`
      )
      .join('')
    this.$ul.innerHTML = htmlStr
  }
  this.render()
  this.$target.appendChild(this.$ul)
  this.$ul.addEventListener('click', (e) => {
    changeUser(e.target.getAttribute('id'))
  })
}
