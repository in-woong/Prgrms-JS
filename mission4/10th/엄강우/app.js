import TodoList from "./TodoList.js"
import Users from "./Users.js"
import Loading from "./loding.js"

import * as api from "./api.js"
function App(params) {

    this.data = params.initialData
    this.users = params.initialUsers
    this.name = params.initialName

    const loading = new Loading({
        $spinner: document.querySelector("#spinner")
    })

    const todoList = new TodoList({
        $todoList : document.querySelector("#todo-list"), 
        data : this.data,
        name : this.name,
        onRemove: async function(name, id)  {
            loading.showSpinner()
            await api.removeTodo(name, id)
            const newData = await api.fetchData(name)
            loading.hideSpinner()
            todoList.setState(newData, name)
        },
        onClick: async function(name, id) {
            loading.showSpinner()
            await api.changeTodoStatus(id)
            const newData = await api.fetchData(name)
            loading.hideSpinner()
            todoList.setState(newData, name)
        },
        removeAll: async function(name) {
            loading.showSpinner()
            await api.removeAll(name)
            loading.hideSpinner()
            todoList.setState([])
        }
    })
    const users = new Users({
        $users : document.querySelector("#user-list"),
        fetchData: async function(name) {
            loading.showSpinner()
            const newData = await api.fetchData(name)
            loading.hideSpinner()
            todoList.setState(newData, name)
        }
    })
    const todoInput = document.querySelector("#todo-input")
    const addTodoButton = document.querySelector("#add-todo-button")

    addTodoButton.addEventListener('click', async () => {
        loading.showSpinner()
        await api.addData(todoInput.value)
        const newData = await api.fetchData()
        loading.hideSpinner()
        todoList.setState(newData)
        todoInput.value = ""
    })

    this.render  = async () => {
        loading.showSpinner()
        this.users = await api.fetchUsers()
        loading.hideSpinner()
        users.render(this.users)
        todoList.setState(this.data, this.name)
    }

    this.render()
}

new App({
    initialData: [],
    initialUsers: [],
    initialName: ""
})
