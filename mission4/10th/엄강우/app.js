import TodoList from "./TodoList.js"
import Api from "./api.js"

function App() {
    const name = "kangwoo"

    this.data = []

    const api = new Api(name)
    const todoList = new TodoList({
        $todoList : document.querySelector("#todo-list"), 
        data : this.data,
        onRemove: async function(id)  {
            await api.removeTodo(id)
            const newData = await api.fetchData()
            todoList.setState(newData)
        },
        onClick: async function(id) {
            await api.changeTodoStatus(id)
            const newData = await api.fetchData()
            todoList.setState(newData)
        },
        removeAll: async function() {
            await api.removeAll()
            todoList.setState([])
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
        this.data = await api.fetchData()
        todoList.setState(this.data)
    }

    this.render()
}

new App()
