import TodoList from "./TodoList.js"
import Users from "./Users.js"

import Api from "./api.js"


function App(params) {

    this.data = params.initialData
    this.users = params.initialUsers
    this.name = params.initialName

    const api = new Api()
    const todoList = new TodoList({
        $todoList : document.querySelector("#todo-list"), 
        data : this.data,
        name : this.name,
        onRemove: async function(name, id)  {
            await api.removeTodo(name, id)
            const newData = await api.fetchData(name)
            todoList.setState(newData, name)
        },
        onClick: async function(name, id) {
            await api.changeTodoStatus(id)
            const newData = await api.fetchData(name)
            todoList.setState(newData, name)
        },
        removeAll: async function(name) {
            await api.removeAll(name)
            todoList.setState([])
        }
    })
    const users = new Users({
        $users : document.querySelector("#user-list"),
        fetchData: async function(name) {
            const newData = await api.fetchData(name)
            todoList.setState(newData, name)
        }
    })
    const todoInput = document.querySelector("#todo-input")
    const addTodoButton = document.querySelector("#add-todo-button")

    addTodoButton.addEventListener('click', async () => {
        await api.addData(todoInput.value)
        const newData = await api.fetchData()
        todoList.setState(newData)
        todoInput.value = ""
    })

    this.render  = async () => {
        this.users = await api.fetchUsers()
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
