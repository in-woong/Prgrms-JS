import TodoContainer from './containers/TodoContainer.js'
import { api } from './api/api.js'

function App($target) {
  const USER_NAME = 'jeongwonHan'

  this.init = async () => {
    this.$target = $target
    this.state = await this.setNextState(USER_NAME)

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
    const todos = await api.loadTodo(userName)
    const nextState = {
      ...this.$state,
      todos,
    }
    return nextState
  }

  this.setState = (nextState) => {
    this.$state = nextState
    this.todoContainer.setState(this.$state)
  }

  this.init()
}

export default App
