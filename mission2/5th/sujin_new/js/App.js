import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import { storage } from './util.js'

function App() {
    // const data = [
    //     {
    //       text: 'JS 공부하기',
    //       isCompleted: false
    //     },
    //     {
    //       text: 'JS 복습하기',
    //       isCompleted: false
    //     },
    // ]

    this.data = [] 

    this.init = () => {
        this.todoList = new TodoList(document.querySelector('#todo-list'), this.data)
        this.todoInput = new TodoInput(document.querySelector('#todo-input'), {
            addTodo: this.addTodo,
            removeTodo: this.removeTodo,
            checkTodo: this.checkTodo,
            allRemoveTodo: this.allRemoveTodo
        })
        this.todoCount = new TodoCount(document.querySelector('#todo-count'), this.data)

        this.getStorage()
        this.setState()
    }

    this.getStorage = () => {
        if (storage.get('todolist') === null) this.data = []
        else {
            this.data = JSON.parse(storage.get('todolist'))
        }
    }

    this.setStorage = () => {
        storage.set('todolist', JSON.stringify(this.data))
    }
    
    this.addTodo = (value) => {
        const newData = {}
        newData.text = value
        newData.isCompleted = false
        this.data.push(newData)
        this.setState()
        this.setStorage()
    }

    this.removeTodo = (index) => {
        this.data.splice(index, 1)
        this.setState()
        this.setStorage()
    }

    this.checkTodo = ($target, index) => {
        this.data[index].isCompleted = !this.data[index].isCompleted
        this.setState()
        this.setStorage()
    }

    this.allRemoveTodo = () => {
        this.data = []
        this.setState()
        localStorage.clear()
    }

    this.setState = () => {
        this.todoList.setState(this.data)
        this.todoCount.setState(this.data)
    }

    this.init()
}
export default App
