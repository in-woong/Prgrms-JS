import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import Users from './Users.js'
import Loading from './Loading.js'
import { fetchTodoList, putTodoList, deleteTodoList, postTodoList } from '../api/todosAPI.js'
import { SELECTOR } from '../shared/constant.js'

function App() {
    this.userId = 'boeun'

    const setTodosTitle = userId => {
        document.querySelector(SELECTOR.TODOTITLE).innerHTML = `${userId}의 할 일`
    }

    this.init = async () => {
        this.userList = new Users({
            target: SELECTOR.USERLIST,
            onClickUser: userId => {
                this.setState(userId)
            }
        })

        this.todoList = new TodoList({
            target: SELECTOR.TODOLIST,
            onClickTodo: async todoId => {
                await putTodoList({
                    userId: this.userId,
                    todoId: todoId
                })
                this.setState(this.userId)
            },
            onRemoveTodo: async todoId => {
                await deleteTodoList({
                    userId: this.userId,
                    todoId: todoId
                })
                this.setState(this.userId)
            }
        })

        this.todoInput = new TodoInput({
            target: SELECTOR.TODOINPUT,
            onAddTodo: async todoText => {
                await postTodoList({
                    userId: this.userId,
                    todoText
                })
                this.setState(this.userId)
            }
        })

        this.loading = new Loading({
            target: SELECTOR.TODOLIST
        })
    }

    this.setState = async userId => {
        this.userId = userId
        // onLoading()
        this.loading.setState(true)
        const updatedData = await fetchTodoList({
            userId: this.userId
        })
        setTodosTitle(this.userId)
        this.todoList.setState(updatedData)
        // offLoading()
        this.loading.setState(false)
    }

    this.init()
}

export default App
