import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import TodoList from './TodoList.js'

export default function App(initialState) {
  this.state = initialState

  const $todoList = document.querySelector('#todo_list')

  this.todoInput = new TodoInput({
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
  })
  this.todoList = new TodoList({
    $todoList,
    todos: this.state,
    onCompletedTodo: (index) => {
      const nextState = [...this.state]

      nextState[index] = {
        text: nextState[index].text,
        isCompleted: !nextState[index].isCompleted,
      }
      this.state = nextState
      this.setState(nextState)
    },
    onDeleteTodo: (index) => {
      const nextState = [...this.state]
      nextState.splice(index, 1)
      this.state = nextState
      this.setState(nextState)
    },
  })
  this.todoCount = new TodoCount({
    $todoList,
    todos: this.state,
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.todoList.setState(this.state)
    this.todoCount.setState(this.state)
  }
}
