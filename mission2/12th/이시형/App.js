import TodoList from "./TodoList.js"
import TodoInput from "./TodoInput.js"
import TodoCount from "./TodoCount.js"
import { stroageName , setTodoItem} from "./Storage.js"

export default function App ({$target , data}) {
    this.$app = document.createElement('div')
    this.$app.classList.add('app')
    this.state = data
    $target.appendChild(this.$app)
    
    this.setState = function(nextState){
        setTodoItem(stroageName,nextState)
        this.state = nextState
        this.render()
    }
    this.render = function(){
        todoList.setState(this.state)
        todoCount.setState(this.state)
    }

    this.$app.addEventListener('removeAll',()=>{
        this.setState([])
    })

    const todoList = new TodoList({
        $app : this.$app,
        state : this.state,
        todoClick : (id)=> {
            const newState = [...this.state]
            newState[id].isCompleted = !newState[id].isCompleted
            this.setState(newState)
        },
        removeTodo : (id) => {
            const newState = [...this.state]
            newState.splice(id,1)
            this.setState(newState)
        }
    })
    const todoInput = new TodoInput({
        $app : this.$app,
        addTodo : (text)=>{
            this.setState([
                ...this.state,
                {
                    text,
                    isCompleted : false,
                }])
        },
        removeAllTodo : () =>{
            this.$app.dispatchEvent(new CustomEvent('removeAll'))
        }
    })

    const todoCount = new TodoCount({
        $app : this.$app,
        state : this.state
    })
}
