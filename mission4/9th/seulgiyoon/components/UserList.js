export default class UserList {
  constructor({ targetEl, initialState, searchUserTodo }) {
    this.el = document.getElementById(targetEl).querySelector('ul')
    this.userData = initialState
    this.searchUserTodo = searchUserTodo
    this.render()
    this.addClickEvent()
  }

  render = () => {
    const htmlString = this.userData.map((user) => `<li>${user}</li>`).join('')
    this.el.innerHTML = htmlString
  }

  addClickEvent = () => {
    this.el.addEventListener('click', (e) => {
      this.searchUserTodo(e.target.innerHTML)
    })
  }

  setState = (userData) => {
    this.userData = userData
    this.render()
  }
}
