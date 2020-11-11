import TodoCount from './TodoCount.js'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'

export default function App({ $app }) {
  this.$app = $app
  this.state = [
    {
      text: 'JS 공부하기',
    },
    {
      text: 'JS 복습하기',
    },
  ]

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
    this.components.forEach(
      (component) => component.setState && component.setState(this.state)
    )
  }
}
