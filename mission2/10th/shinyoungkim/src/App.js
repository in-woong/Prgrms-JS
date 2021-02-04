import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'

export default function App( $app, initialState ) { 

  this.state = initialState
  
  this.init = () => {
    this.todoInput = new TodoInput({$app, onAddTodoItem})
    this.todoList = new TodoList({$app, initialState: this.state})
  }

  const onAddTodoItem = (text) => {
    const nextSate = [
      ...this.state, 
      {
        text: text,
        isCompleted: false
      }
    ]
    this.setState(nextSate)
  }


  this.setState = (nextData) => {
    this.state = nextData
    this.todoList.setState(this.state)
  }

  this.init()
}
