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
          const uuid = Math.random().toString(36).substr(2, 16)
          const nextState = [
            ...this.state,
            { id: uuid, text: todoItem, isCompleted: false },
          ]
          this.setState(nextState)
        },
        deleteAllItem: () => {
          // review1 : immutable -> mutable
          this.setState([])
        },
      }),
      new TodoList({
        $app,
        initialState: this.state,
        toggleTodoItem: (itemIndex) => {
          // review3 : mutable -> immutable
          // review3-2 : item별 id부여 로직 text -> id 변경
          const toggleTarget = this.state[itemIndex]
          const nextState = this.state.map((item) => {
            if (item.id === toggleTarget.id) {
              return {
                id: toggleTarget.id,
                text: toggleTarget.text,
                isCompleted: !toggleTarget.isCompleted,
              }
            } else {
              return {
                id: item.id,
                text: item.text,
                isCompleted: item.isCompleted,
              }
            }
          })
          this.setState(nextState)
        },
        removeTodoItem: () => {
          // review2 : mutable -> immutable
          // review2-2 : index 값만으로 비교
          const nextState = this.state.filter((target, index) => index)

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
