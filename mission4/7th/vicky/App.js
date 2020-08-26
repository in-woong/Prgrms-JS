import TodoUsers from './components/TodoUsers.js'
import TodoDomGenerator from './components/TodoDomGenerator.js'
import TodoList from './components/TodoList.js'
import TodoCount from './components/TodoCount.js'
import TodoInput from './components/TodoInput.js'
import Spinner from './components/Spinner.js'
import {
  getUsersList,
  getTodoList,
  addTodo,
  toggleTodo,
  removeTodo,
  removeAllTodo,
} from './utils/api.js'

function App(elementId) {
  if (!(this instanceof App)) {
    throw new Error('error: App must be called with new!')
  }

  this.elementDom = document.getElementById(elementId)

  const onFetchUsers = async (searchPath) => {
    this.Spinner.setState('.usersList ul', true)
    const responseUsers = await getUsersList(searchPath)

    if (responseUsers) {
      this.Spinner.setState('.usersList ul', false)
      this.TodoUsers.setState(responseUsers)
    }
  }

  const onShow = (userName) => {
    this.setState(userName)
  }

  const onAdd = async (addData) => {
    console.log(this.userName)
    await addTodo(this.userName, addData)
    this.setState()
  }

  const onToggle = async (listIndex) => {
    await toggleTodo(this.userName, listIndex)
    // FIXME: setState를 제외해도 TodoCount를 제외한 컴포넌트는 문제가 없다.
    // 오히려 자연스럽다. TodoCount 동작을 개선할 수 있을까?
    this.setState()
  }

  const onRemove = async (listIndex) => {
    await removeTodo(this.userName, listIndex)
    this.setState()
  }

  const onRemoveAll = async () => {
    await removeAllTodo(this.userName)
    this.setState()
  }

  this.render = () => {
    this.TodoDomGenerator.setState(this.userName)
    this.TodoList.setState(this.todos)
    this.TodoCount.setState(this.todos)
  }

  this.setState = async (username) => {
    if (username) {
      this.userName = username
    }
    this.Spinner.setState('.dragBox', true)
    this.todos = await getTodoList(this.elementDom, this.userName)

    if (this.todos) {
      this.Spinner.setState('.dragBox', false)
      this.render()
    }
  }

  this.init = () => {
    try {
      this.Spinner = new Spinner(this.elementDom)
      this.TodoDomGenerator = new TodoDomGenerator(this.elementDom)
      this.TodoUsers = new TodoUsers(this.elementDom, {
        onAction: { search: onFetchUsers, show: onShow },
      })
      this.TodoList = new TodoList(this.elementDom, onToggle)
      this.TodoCount = new TodoCount(this.elementDom)
      this.TodoInput = new TodoInput(this.elementDom, {
        onAction: {
          add: onAdd,
          remove: onRemove,
          removeAll: onRemoveAll,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  this.init()
}

new App('todoStorage')
