export default function Users({ $app, initialState, onClick }) {
  this.$target = document.createElement('div')
  this.$target.className = 'users'

  this.state = initialState
  $app.appendChild(this.$target)

  this.$target.addEventListener('click', (e) => {
    const username = e.target.closest('li').dataset.username
    if (username) {
      onClick(username)
    }
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { users } = this.state
    this.$target.innerHTML = `
      <ul>
        ${users
          .map((username) => `<li data-username="${username}">${username}</li>`)
          .join('')}
      </ul>
    `
  }
}
