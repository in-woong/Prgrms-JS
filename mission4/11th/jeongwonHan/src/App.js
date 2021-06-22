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
      setState: this.setState,
      setNextState: this.setNextState,
    })

    this.todoContainer = new TodoContainer({
      $target: this.$target.querySelector('.runningTodoList'),
      state: {
        ...this.state,
        todos: this.state.todos.filter(({ isCompleted }) => !isCompleted)
      },
      setState: this.setState,
      setNextState: this.setNextState,
    })

    this.todoContainer = new TodoContainer({
      $target: this.$target.querySelector('.completedTodoList'),
      state: {
        ...this.state,
        todos: this.state.todos.filter(({ isCompleted }) => isCompleted)
      },
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
    this.userContainer.userName.setState(this.state)
    this.userContainer.userList.setState(this.state)
    this.todoContainer.todoList.setState(this.state)
    this.todoContainer.todoCount.setState(this.state)
    this.loading.setState(this.isLoading)
  }

  this.init()
}

export default App
