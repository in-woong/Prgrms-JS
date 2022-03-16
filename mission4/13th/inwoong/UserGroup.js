const MAX_USER_COUNT = 3

export default function UserGroup({ $target, user, userList, onChangeUser }) {
  this.$target = $target
  this.username = user
  this.userList = userList
  const $user = document.createElement('h1')

  const $userGroup = document.createElement('ul')
  $userGroup.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
      onChangeUser(e.target.innerText)
    }
  })

  this.$target.append($userGroup, $user)

  this.render = () => {
    console.log('UserGroup Render')
    $user.innerText = this.username
    $userGroup.innerHTML = this.userList
      .slice(0, MAX_USER_COUNT)
      .map((user) => `<li style="cursor:pointer">${user}</li>`)
      .join('')
  }
  this.setState = (newUser) => {
    console.log('UserGroup SetState')
    this.username = newUser
    this.render()
  }
  this.render()
}
