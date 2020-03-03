import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import Users from './Users.js'
import { fetchTodoList, putTodoList, deleteTodoList, postTodoList } from '../api/todosAPI.js'
import { onLoading, offLoading } from '../shared/util.js'
import { SELECTOR } from '../shared/constant.js'

function App() {
    this.userId = 'boeun'

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
                onLoading()
                await putTodoList({
                    userId: this.userId,
                    todoId: todoId
                })
                this.setState(this.userId)
            },
            onRemove: async todoId => {
                onLoading()
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
                onLoading()
                await postTodoList({
                    userId: this.userId,
                    todoText
                })
                this.setState(this.userId)
            }
        })
    }

    this.setState = async userId => {
        this.userId = userId
        onLoading()
        const updatedData = await fetchTodoList({
            userId: this.userId
        })
        setTodosTitle(this.userId)
        this.todoList.setState(updatedData)
        offLoading()
    }

    this.init()
}

export default App
