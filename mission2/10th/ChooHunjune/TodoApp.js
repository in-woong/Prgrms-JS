import TodoList from './Components/TodoList.js'
import TodoInput from './Components/TodoInput.js'
import TodoCount from './Components/TodoCount.js'


export default function TodoApp($app) {
  try {
    this.state = JSON.parse(localStorage.getItem('todolist-data'))
    if (this.state === null) {
      this.state = []
    }
  } catch (error) {
    console.error(error)
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.todoList.setState(this.state)
    this.todoCount.setState(this.state)

    localStorage.setItem('todolist-data', JSON.stringify(this.state))
  }

  this.todoCount = new TodoCount({
    $app,
    initialState: this.state
  })

  this.todoInput = new TodoInput({
    $app,
    onTodoInput: (text) => {
      const nextState = [
        ... this.state,
        {
          text,
          isCompleted: false
        },
      ]
      this.setState(nextState)
    },
  })
  window.addEventListener('removeAll', () => {
    if (confirm('모두 삭제하시겠습니까?')) {
      this.setState([])
    }
  })

  this.todoList = new TodoList({
    $app,
    initialState: this.state,
    onClick: (index) => {
      const nextState = [... this.state]
      nextState[index] = {
        text: nextState[index].text,
        isCompleted: !nextState[index].isCompleted
      }
      this.setState(nextState)
    }
  })
  
}