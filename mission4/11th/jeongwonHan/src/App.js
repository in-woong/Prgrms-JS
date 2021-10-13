import TodoContainer from './containers/TodoContainer.js'
import UserContainer from './containers/UserContainer.js'
import Loading from './components/common/Loading.js'
import { api } from './api/api.js'

function App($target) {
  const USER_NAME = 'jeongwonHan'

  this.init = async () => {
    this.$target = $target
    this.isLoading = false

    this.loading = new Loading({ $target: this.$target, isLoading: this.isLoading })

    this.state = await this.setNextState(USER_NAME)

    this.userContainer = new UserContainer({
      $target: this.$target.querySelector('.userListContainer'),
      state: this.state,
      setAllState: this.setAllState,
      setNextState: this.setNextState,
    })

    this.todoContainer = new TodoContainer({
      $target: this.$target.querySelector('.todoListContainer'),
      state: this.state,
      setAllState: this.setAllState,
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
      this.isLoading = false
      this.loading.setState(this.isLoading)
      return nextState
    } catch (e) {
      console.log(e)
    }
  }

  this.setAllState = (nextState) => {
    this.state = nextState
    this.userContainer.setState(this.state)
    this.todoContainer.setState(this.state)
    this.loading.setState(this.isLoading)
  }

  this.init()
}

export default App
