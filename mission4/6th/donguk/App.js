import { checkSelector } from './utils/validation.js'
import { Header, TodoInput, TodoList } from './components/index.js'
import ErrorModal from './components/modal/ErrorModal.js'
import { postTodo, getTodos } from './api/apis.js'

export default function App(props) {
  if (new.target !== App) {
    throw new Error('Please use \'new\' Keyword')
  }
  const { selector } = props
  checkSelector(selector)
  this.userName = 'donguk'
  this.todos = []

  this.init = () => {
    this.$header = new Header({
      selector,
      userName: this.userName,
    })
    this.$todoInput = new TodoInput({
      selector,
      onAddTodo: this.handleAddTodo,
    })
    this.$todoList = new TodoList({
      selector,
      todos: this.todos,
    })
    this.$errorModal = new ErrorModal({
      selector,
      title: '오류 발생..',
      content: 'temp content',
    })

    this.handleGetTodos(this.userName) // initial Data load
  }


  this.handleAddTodo = async (content) => {
    try {
      await postTodo(this.userName, content)
      this.handleGetTodos(this.userName)
    } catch (e) {
      this.$errorModal.editTitleAndContent(e.message)
      this.$errorModal.setState(true) // modal on
    }
  }// need edit

  this.handleGetTodos = async (userName) => {
    try {
      this.todos = await getTodos(userName)
      this.$todoList.setState(this.todos)
    } catch (e) {
      this.$errorModal.editTitleAndContent(e.message)
      this.$errorModal.setState(true) // modal on
    }
  }

  this.init()
}
