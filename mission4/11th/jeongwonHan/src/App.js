import TodoContainer from './containers/TodoContainer.js'
import UserList from './components/UserList.js'
import { api } from './api/api.js'

function App($target) {
  const USER_NAME = 'jeongwonHan'

  this.init = async () => {
    this.$target = $target
    this.state = await this.setNextState(USER_NAME)

    this.userList = new UserList({
      $target: this.$target,
      state: this.state,
    })

    this.$todoListDiv1 = document.createElement('div')
    this.$todoListDiv1.classList.add('todoList')

    this.$target.appendChild(this.$todoListDiv1)

    this.todoContainer = new TodoContainer({
      $target: this.$todoListDiv1,
      state: this.state,
      setState: this.setState,
    })
  }

  this.setNextState = async (userName) => {
    const todos = await api.getUserTodoList(userName)
    const userList = await api.getUserList()
    const nextState = {
      ...this.$state,
      userList,
      todos,
    }
    console.log(nextState)
    return nextState
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.todoContainer.setState(this.state)
  }

  this.init()
}

export default App
