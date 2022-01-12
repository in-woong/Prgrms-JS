import storage from './localStorage.js'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'
import { request } from './api.js'


export default function App({ $target }) {
    this.state = request({ username: "roto", method: "get" })

    this.setState = nextState => {
        this.state = nextState
        todoList.setState(this.state)
        todoCount.setState({
            totalCount: this.state.length,
            completedCount: this.state.filter(todo => todo.isCompleted).length
        })

        storage.setItem('todos', this.state)
    }

    const todoInput = new TodoInput({
        $target,
        onAddTodo: (text) => {
            this.setState([
                ...this.state,
                {
                    text,
                    isCompleted: false
                }
            ])
        }
    })

    const todoList = new TodoList({
        $target,
        initialState: this.state,
        onTodoClick: (index) => {
            const nextState = [...this.state]
            nextState[index].isCompleted = !nextState[index].isCompleted
            this.setState(nextState)
        },
        onRemove: (index) => {
            const nextState = [...this.state]
            nextState.splice(index, 1)
            this.setState(nextState)
        }
    })
    const todoCount = new TodoCount({
        $target,
        initialState: {
            totalCount: this.state.length,
            completedCount: this.state.filter(todo => todo.isCompleted).length
        }
    })

    window.addEventListener('remove-all-todos', () => {
        this.setState([])
    })
}