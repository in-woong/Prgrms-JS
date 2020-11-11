import TodoCount from './TodoCount.js'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'

import { getItem, setItem } from './localStorage.js'

const TODOS_STORAGE_KEY = 'todos'
export default function App({ $app }) {
  this.$app = $app
  this.state = getItem(TODOS_STORAGE_KEY, [])

  this.components = [
    new TodoInput({
      onAddTodo: (text) => {
        const nextState = [
          ...this.state,
          {
            text,
            isCompleted: false,
          },
        ]

        this.setState(nextState)
      },
      $app,
    }),
    new TodoList({
      $app,
      initialState: this.state,
    }),
    new TodoCount({
      $app,
      initialState: this.state,
    }),
  ]

  this.setState = (nextState) => {
    this.state = nextState
    setItem(TODOS_STORAGE_KEY, nextState)

    this.components.forEach(
      (component) => component.setState && component.setState(this.state)
    )
  }
}
