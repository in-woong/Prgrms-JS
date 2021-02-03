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
          // review1 : immutable -> mutable
          // 수정전
          // this.state.splice(0, this.state.length)
          // this.setState(this.state)

          // 수정후
          this.setState([])
        },
      }),
      new TodoList({
        $app,
        initialState: this.state,
        toggleTodoItem: (itemIndex) => {
          // review3 : mutable -> immutable
          // let targetListItem = this.state[itemIndex]
          // targetListItem.isCompleted = !targetListItem.isCompleted
          // this.setState(this.state)

          // 수정후
          const toggleTarget = this.state[itemIndex]
          const nextState = this.state.map((item) => {
            if (item.text === toggleTarget.text) {
              return {
                text: toggleTarget.text,
                isCompleted: !toggleTarget.isCompleted,
              }
            } else {
              return { text: item.text, isCompleted: item.isCompleted }
            }
          })
          this.setState(nextState)
        },
        removeTodoItem: (itemIndex) => {
          // review2 : mutable -> immutable
          // 수정전
          // this.state.splice(itemIndex, 1)
          // this.setState(this.state)

          //수정후
          const removeTarget = this.state[itemIndex]
          const nextState = this.state.filter(
            (target) => target !== removeTarget,
          )
          this.setState(nextState)
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
