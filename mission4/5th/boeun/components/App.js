import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import Users from './Users.js'
import { fetchTodoList, putTodoList, deleteTodoList, postTodoList } from '../api/todosAPI.js'
import { showLoadState } from '../shared/util.js'
import { SELECTOR } from '../shared/constant.js'

function App() {
    this.userId = ''

    const setTodosTitle = userId => {
        document.querySelector(SELECTOR.TODOTITLE).innerHTML = `${userId}의 할 일`
    }

    this.init = async () => {
        this.userList = new Users({
            target: SELECTOR.USERLIST,
            onClick: userId => {
                this.setState(userId)
            }
        })

        this.todoList = new TodoList({
            target: SELECTOR.TODOLIST,
            onClick: async todoId => {
                showLoadState()
                await putTodoList({ userId: this.userId, todoId: todoId })
                this.setState(this.userId)
            },
            onRemove: async todoId => {
                showLoadState()
                await deleteTodoList({ userId: this.userId, todoId: todoId })
                this.setState(this.userId)
            }
        })

        this.todoInput = new TodoInput({
            target: SELECTOR.TODOINPUT,
            onAddTodo: async todoText => {
                await postTodoList({ userId: this.userId, todoText })
                this.setState(this.userId)
            }
        })
    }

    this.setState = async userId => {
        this.userId = userId
        showLoadState()
        const updatedData = await fetchTodoList({ userId: this.userId })
        setTodosTitle(this.userId)
        this.todoList.setState(updatedData)
    }

    this.init()
}

export default App
