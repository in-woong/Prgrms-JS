import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'

export default function App( $app, initialState ) { 

  this.state = initialState
  
  this.init = () => {
    this.todoCount = new TodoCount({ $app, initialState })
    this.todoInput = new TodoInput({ $app, onChange })
    this.todoList = new TodoList({ $app, initialState, onRemove, onToggle })
  }

  const onChange = (text) => {
    const nextSate = [
      ...this.state, 
      {
        text: text,
        isCompleted: false
      }
    ]

    this.setState(nextSate)
  }

  const onRemove = (index) => {
    this.state.splice(index, 1)
    this.setState(this.state)
  }

  const onToggle = (index) => {
    const nextState = [...this.state]
    nextState[index] = {
      text: nextState[index].text,
      isCompleted: !nextState[index].isCompleted
    }

    this.setState(nextState)
  }


  this.setState = (nextData) => {
    this.state = nextData
    this.todoList.setState(this.state)
    this.todoCount.setState(this.state)
  }

  this.init()
}
