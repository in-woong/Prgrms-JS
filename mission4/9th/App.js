import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import {fetchData, addData, deleteData, toggleData} from './Api.js'

export default function App({$app}){
    this.$app = $app
    this.state = []
    this.components = [
      new TodoList({
        $app, 
        initialState: this.state,
        deleteTodo:  async(id) => {
          await deleteData(id)
          this.initTodo()
        },
        toggleTodo: async(id) => {
          await toggleData(id)
          this.initTodo()
        }
      }),
      new TodoInput({
        $app,
        addTodo: async (text) => {
          await addData(text)
          this.initTodo()
        }
      }),
      new TodoCount({
        $app,
        initialState: this.state
      })
    ]  
    
    this.initTodo = async () => {
        const nextState = await fetchData()
        this.setState(nextState)
        console.log(nextState)
    }
    
    this.setState = (nextState) => {
      this.state = nextState
      this.components.forEach(
        (component) => component.setState && component.setState(this.state)
      )
    }

    this.initTodo()
}
