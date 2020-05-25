function UserList({ $userList, data, onLoadUserList }) {
  this.render = () => {
    $userList.innerHTML = `<ul>
        ${data && data.map((user) => `<li class="user">${user}</li>`).join('')}
      </ul>
    `
  }

  $userList.addEventListener('click', (event) => {
    const { target } = event
    if (target.className === 'user') {
      onLoadUserList(target.innerText)
    }
  })

  this.setState = (nextData) => {
    data = nextData
    this.render()
  }

  this.render()
}

export default UserList
