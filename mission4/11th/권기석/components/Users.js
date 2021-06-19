export default function Users({ $app, userList }) {
  this.userList = userList

  this.$users = document.createElement('ul')
  this.$users.className = 'users'
  $app.appendChild(this.$users)

  this.$users.addEventListener('click', (e) => {
    const name = e.target.closest('li')?.dataset.name
    if (name) {
      console.log(name)
    }
  })

  this.render = () => {
    const htmlString = this.userList.map((name) => `<li class="user-name" data-name=${name}>${name}</li>`).join('')
    this.$users.innerHTML = htmlString
  }

  this.setState = (userList) => {
    this.userList = userList
    this.render()
  }

  this.render()
}
