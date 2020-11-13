import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'

import {getItem, setItem} from './localStorage.js'

const TODOS_STORAGE_KEY = 'todos'
export default function App({$app}){
    this.$app = $app
    this.state = getItem(TODOS_STORAGE_KEY, [])
    
    this.components = [
      new TodoList({
        $app, 
        initialState: this.state, 
        changeState: (state) => this.setState(state)
      }),
      new TodoInput({
        $app,
        addTodo: (text) => {
          const nextState = [
            ...this.state, 
            {
              text: text,
              isCompleted: false
            }
          ]

          this.setState(nextState)
        }
      }),
      new TodoCount({
        $app,
        initialState: this.state
      })
    ]  

    this.setState = (nextState) => {
      this.state = nextState
      setItem(TODOS_STORAGE_KEY, nextState)
      this.components.forEach(
        (component) => component.setState && component.setState(this.state)
      )
    }
}


