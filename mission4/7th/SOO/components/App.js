import {
    todoListApi,
    todoInputApi,
    toggleTodoApi,
    currentUserApi,
    deleteTodoApi
} from '../utils/api.js'
import isLoading from '../utils/isLoading.js'

import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoUser from './TodoUser.js'
import UserName from './UserName.js'

export default function App() {
    let currentUser = 'soo'
    let todos = []

    this.init = async () => {

        todos = await todoListApi(currentUser);

        this.setState = async () => {
            const updatedData = await todoListApi(currentUser)
            this.todoList.setState(updatedData)
        }

        this.fetchToggle = async (id) => {
            await toggleTodoApi(currentUser, id)
            this.setState()
        }

        this.fetchInput = async (todoText) => {
            await todoInputApi(currentUser, todoText)
            this.setState()
        }

        this.fetchDelete = async (id) => {
            await deleteTodoApi(currentUser, id)
            this.setState()
        }

        this.fetchCurrentUser = async (clickedUser) => {
            currentUser = clickedUser
            this.userName.setState(currentUser)

            isLoading(true)
            await currentUserApi(currentUser, 2000)
            isLoading(false)

            this.setState()
        }

        this.userName = new UserName({
            currentUser
        })

        this.todoList = new TodoList({
            todos,
            onToggle: this.fetchToggle,
            onRemove: this.fetchDelete
        })

        this.todoInput = new TodoInput({
            onInput: this.fetchInput
        })

        this.todoUser = new TodoUser({
            currentUser,
            onUsers: this.fetchCurrentUser
        })
    }
    this.init()
}
