import { request } from "../utils/api.js"

export default function Users({ $target, userName, onClickUser }) {
  this.state = userName
  this.users = []
  this.fetchUsers = async () => {
    this.users = await request.getUsers()
    this.render()
  } 

  this.setState = nextState => {
    this.state = nextState

    this.fetchUsers()
  }


  this.render = () => {
    const userListTemplate = `<h1>👤 유저 목록 👤</h1>
      ${this.users
        .map(user => `<li>${user}</li>`).join('')}
      `

    $target.innerHTML = userListTemplate
  }

  this.loadEvents = () => {
    this.fetchUsers()
    $target.addEventListener('click', ({ target }) => {
      onClickUser(target.innerText)
    })
  }

  this.loadEvents()
}