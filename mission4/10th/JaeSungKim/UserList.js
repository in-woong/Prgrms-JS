function UserList({ $target, initialUser, userData, onUserClick }) {
  if (!(this instanceof UserList)) {
    return new UserList({ $target, data, onUserClick })
  }
  const $current = $target.current
  const $list = $target.list

  this.currentUser = initialUser
  this.userData = userData || []

  this.render = () => {
    const htmlString = this.userData.map((username) => {
      return `
        <li class="user-text">
          ${username}
        </li>`
    })
    $list.innerHTML = `<ul id='user-list'>${htmlString.join('')}</ul>`
    $current.innerHTML = `<span id="user-name">${this.currentUser}</span>'s Todo List`
  }

  $list.addEventListener('click', function (e) {
    if (e.target.className === 'user-text') {
      e.stopPropagation()
      onUserClick(e.target.innerHTML.trim())
    }
  })

  this.setState = (currentUser, userData) => {
    this.currentUser = currentUser
    this.userData = userData || []
    this.render()
  }

  this.render()
}
