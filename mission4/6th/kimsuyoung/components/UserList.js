function UserList({ $userList, data }) {
  this.render = () => {
    $userList.innerHTML = `<ul style="display:flex">
        ${data && data.map((user) => `<li>${user}</li>`).join('')}
      </ul>
    `
  }

  this.setState = (nextData) => {
    data = nextData
    console.log('user list', data)
    this.render()
  }

  this.render()
}

export default UserList
