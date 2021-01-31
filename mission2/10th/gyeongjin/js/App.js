import { TodoList } from './TodoList.js'
import { TodoInput } from './TodoInput.js'
import { TodoCount } from './TodoCount.js'
import { getItem, setItem } from './localStorage.js'

const TODOLIST_KEY = 'todoList'

export class App {
  constructor({ $app }) {
    this.app = $app
    this.state = getItem(TODOLIST_KEY, [])

    this.components = [
      new TodoInput({
        $app,
        addTodoItem: (todoItem) => {
          const nextState = [
            ...this.state,
            { text: todoItem, isCompleted: false },
          ]
          this.setState(nextState)
        },
        deleteAllItem: () => {
          this.state.splice(0, this.state.length)
          this.setState(this.state)
        }
      }),
      new TodoList({
        $app,
        initialState: this.state,
        toggleTodoItem: (itemIndex) => {
          let targetListItem = this.state[itemIndex]
          targetListItem.isCompleted = !targetListItem.isCompleted
          this.setState(this.state)
        },
        removeTodoItem: (itemIndex) => {
          this.state.splice(itemIndex, 1)
          this.setState(this.state)
        },
      }),
      new TodoCount({
        $app,
        initialState: this.state,
      }),
    ]
  }

  setState = (nextState) => {
    this.state = nextState
    setItem(TODOLIST_KEY, nextState)
    this.components.forEach((component) => {
      component.setState && component.setState(nextState)
    })
  }
}
