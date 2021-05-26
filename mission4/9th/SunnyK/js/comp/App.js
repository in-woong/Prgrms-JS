import UserList from './UserList.js'
import TodoInput from './TodoInput.js'
import Trello from './Trello.js'
import ErrorUI from './ErrorUI.js'
import { checkNewKeyword } from '../util/validation.js'
import { createElementWithClass } from '../util/util.js'
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  deleteAllTodo,
  toggleTodo,
  fetchUsers,
} from '../util/api.js'

export default class App {
  constructor({ $app }) {
    checkNewKeyword(new.target)

    this.$app = $app
    this.$main = document.createElement('main')
    this.$app.appendChild(this.$main)

    this.userName = ''
    this.isLoading = false
    this.todos = []
    this.users = []

    this.components = {
      userList: new UserList({
        $parent: this.$main,
        users: this.users,
        onSelectUser: this.onSelectUser,
      }),
      todoInput: new TodoInput({
        $parent: this.$main,
        isShowComp: this.userName === '' ? false : true,
        onAddTodo: this.onAddTodo,
        onDeleteAllTodo: this.onDeleteAllTodo,
      }),
      trello: new Trello({
        $parent: this.$main,
        userName: this.userName,
        todos: this.todos,
        isLoading: this.isLoading,
        onDeleteTodo: this.onDeleteTodo,
        onToggleTodo: this.onToggleTodo,
      }),
      errorUI: new ErrorUI({
        $parent: this.$app,
        isShowComp: false,
      }),
    }

    this.init()
    this.updateUsers()
  }

  init = () => {
    const $h1 = createElementWithClass({ tagName: 'h1', className: 'sr-only' })
    $h1.innerHTML = 'Todolist'

    this.$main.insertAdjacentElement('afterbegin', $h1)
  }

  updateTodos = async () => {
    this.setState({ nextIsLoading: true })
    const nextTodos = await fetchTodos(this.userName)

    nextTodos === 'error'
      ? this.setState({
          errorMessage: 'Error : 할 일 목록 가져오기에 실패했어요ㅠㅠ',
          nextIsLoading: false,
          nextTodos: [],
        })
      : this.setState({ nextIsLoading: false, nextTodos })
  }

  updateUsers = async () => {
    const nextUsers = await fetchUsers()

    nextUsers === 'error'
      ? this.setState({
          errorMessage: 'Error : 사용자 목록 가져오기에 실패했어요ㅠㅠ',
          nextUsers: [],
        })
      : this.setState({ nextUsers })
  }

  onSelectUser = (nextUserName) => {
    this.setState({ nextUserName })
    this.updateTodos()
  }

  onAddTodo = async (todoText) => {
    const isSuccess = await addTodo(this.userName, todoText)

    isSuccess
      ? this.updateTodos()
      : this.setState({
          errorMessage: 'Error : 할 일 추가하기에 실패했어요ㅠㅠ',
        })
  }

  onToggleTodo = async (todoId) => {
    const isSuccess = await toggleTodo(this.userName, todoId)

    isSuccess
      ? this.updateTodos()
      : this.setState({
          errorMessage: 'Error : 할 일 상태 변경에 실패했어요ㅠㅠ',
        })
  }

  onDeleteTodo = async (todoId) => {
    const isSuccess = await deleteTodo(this.userName, todoId)

    isSuccess
      ? this.updateTodos()
      : this.setState({ errorMessage: 'Error : 할 일 삭제에 실패했어요ㅠㅠ' })
  }

  onDeleteAllTodo = async () => {
    const isSuccess = await deleteAllTodo(this.userName)

    isSuccess
      ? this.setState({ nextTodos: [] })
      : this.setState({
          errorMessage: 'Error : 전체 할 일 삭제에 실패했어요ㅠㅠ',
        })
  }

  setState = ({
    errorMessage,
    nextUserName,
    nextTodos,
    nextIsLoading,
    nextUsers,
  }) => {
    errorMessage
      ? this.components.errorUI.setState({
          nextIsShowComp: true,
          nextErrorMessage: errorMessage,
        })
      : this.components.errorUI.setState({ nextIsShowComp: false })

    if (nextUserName) {
      this.userName = nextUserName
      this.components.todoInput.setState(true)
    }

    if (nextIsLoading) {
      this.isLoading = nextIsLoading
      this.components.trello.setState({ nextIsLoading })
    }

    if (nextIsLoading === false && nextTodos) {
      this.isLoading = nextIsLoading
      this.todos = nextTodos
      this.components.trello.setState({
        nextIsLoading: this.isLoading,
        nextUserName: this.userName,
        nextTodos: this.todos,
      })
    }

    if (nextUsers) {
      this.users = nextUsers
      this.components.userList.setState(this.users)
    }
  }
}
