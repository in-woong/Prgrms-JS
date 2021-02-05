import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'
import TodoRemove from './components/TodoRemove.js'

import { getItem , setItem } from './utils/localStorage.js'

const TODO_STORAGE_KEY = 'todolocalStorege'

export default function App({$app}) { 
  
  this.init = () => {

    this.state = getItem(TODO_STORAGE_KEY) || [] 

    this.todoCount = new TodoCount({ $app, initialState: this.state  })
    this.todoInput = new TodoInput({ $app, onChange })
    this.todoRemove = new TodoRemove({ $app, onRemove })
    this.todoList = new TodoList({ $app, initialState: this.state , onRemove, onToggle })

    this.removeAllButton()
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

  this.removeAllButton = () => {
    const removeAllBtn = this.todoRemove.$target

    removeAllBtn.addEventListener('remove-all', event => {
      localStorage.clear()
      this.state = []
      this.todoList.setState(this.state)
    })
  } 

  this.setState = (nextState) => {
    this.state = nextState
    setItem(TODO_STORAGE_KEY, nextState)
    this.todoList.setState(this.state)
    this.todoCount.setState(this.state)
  }

  this.init()
}
