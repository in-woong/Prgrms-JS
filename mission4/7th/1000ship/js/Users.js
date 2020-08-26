import api from './api.js'

function Users({ $userList, data, openTodoList, moveItemToOtherTodo }) {
  this.$userList = $userList
  this.data = data || { userList: [], loading: false, error: null }
  this.openTodoList = openTodoList
  this.moveItemToOtherTodo = moveItemToOtherTodo

  this.$userList.addEventListener('dragleave', (e) => {
    e.preventDefault()
    if (e.target.tagName === 'LI') e.target.style.color = 'inherit'
  })

  this.$userList.addEventListener('dragover', (e) => {
    e.preventDefault()
    if (e.target.tagName === 'LI') e.target.style.color = 'lightblue'
  })

  this.$userList.addEventListener('drop', (e) => {
    if (e.target.tagName === 'LI') {
      e.target.style.color = 'inherit'
      const targetTodo = e.target.innerText.trim()
      const originalItemId = e.dataTransfer.getData('text/plain')
      this.moveItemToOtherTodo(targetTodo, originalItemId)
    }
  })

  this.$userList.addEventListener('click', (e) => {
    const clickLI = e.target.closest('li')
    if (clickLI) {
      const username = clickLI.innerHTML.trim()
      openTodoList(username)
    }
  })

  this.setState = (newData) => {
    this.data = newData
    this.render()
  }

  this.render = () => {
    const htmlString = this.data.userList
      .map(
        (user) => `
            <li class='hand-cursor'>
              ${user}
            </li>
          `
      )
      .join('')
    this.$userList.innerHTML = htmlString
  }
  this.render()
}

export default Users
