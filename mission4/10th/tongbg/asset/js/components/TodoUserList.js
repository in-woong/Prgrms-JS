import validateData, { isNew } from '../common/validateData.js'

function TodoUserList({ $App, onClickUser, initUserList, initUserName }) {
  if (isNew(new.target)) {
    this.state = {
      userList: initUserList,
      currentUser: initUserName,
    }

    this.$userListDOM = document.createElement('div')
    this.$ul = document.createElement('ul')

    this.$userListDOM.appendChild(this.$ul)

    this.$userListDOM.id = 'user-list'
    $App.appendChild(this.$userListDOM)

    this.$ul.addEventListener('click', onClickUser)
  }

  this.setState = (nextData) => {
    this.state = nextData
    this.render()
  }

  this.render = () => {
    this.$ul.innerHTML = this.state.userList.map((userName) => `<li ${this.state.currentUser === userName ? 'class="on"' : ''}>${userName}</li>`).join('')
  }

  this.render()
}

export default TodoUserList
