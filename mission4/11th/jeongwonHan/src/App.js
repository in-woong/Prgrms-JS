import TodoContainer from './containers/TodoContainer.js'
import UserList from './components/UserList.js'
import UserName from './components/UserName.js'
import Loading from './components/common/Loading.js'
import { api } from './api/api.js'

function App($target) {
  const USER_NAME = 'jeongwonHan'

  this.init = async () => {
    this.$target = $target

    this.loading = new Loading({ $target: this.$target, isLoading: this.isLoading })
    this.isLoading = false

    this.state = await this.setNextState(USER_NAME)

    this.userName = new UserName({
      $target: this.$target,
      state: this.state,
    })

    this.userList = new UserList({
      $target: this.$target,
      state: this.state,
      onSelectUser: async (userName) => {
        try {
          const nextState = await this.setNextState(userName)
          this.setState(nextState)
        } catch (e) {
          console.log(e)
        }
      },
    })

    this.$todoListDiv1 = document.createElement('div')
    this.$todoListDiv1.classList.add('todoList')

    this.$target.appendChild(this.$todoListDiv1)

    this.todoContainer = new TodoContainer({
      $target: this.$todoListDiv1,
      state: this.state,
      setState: this.setState,
      setNextState: this.setNextState,
    })
  }

  this.setNextState = async (userName) => {
    try {
      this.isLoading = true
      this.loading.setState(this.isLoading)
      const todos = await api.getUserTodoList(userName)
      const userList = await api.getUserList()
      const nextState = {
        ...this.$state,
        userList,
        todos,
        userName,
      }
      console.log(nextState)

      this.isLoading = false
      this.loading.setState(this.isLoading)
      return nextState
    } catch (e) {
      console.log(e)
    }
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.userName.setState(this.state)
    this.userList.setState(this.state)
    this.todoContainer.todoList.setState(this.state)
    this.todoContainer.todoCount.setState(this.state)
    this.loading.setState(this.isLoading)
  }

  this.init()
}

export default App
