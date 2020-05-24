import { checkSelector } from './utils/validation.js'
import { Header, TodoInput } from './components/index.js'

export default function App(props) {
  if (new.target !== App) {
    throw new Error('Please use \'new\' Keyword')
  }
  const { selector } = props
  checkSelector(selector)

  this.init = () => {
    this.$header = new Header({ selector, userName: 'donguk' })
    this.$todoInput = new TodoInput({ selector })
  }
  this.handleAddTodo = async (todo) => {

  }// todo add

  this.init()
}
