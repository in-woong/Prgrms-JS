import TodoInput from './TodoInput.js'
import TodoList from  './TodoList.js'

class App {
    constructor() {
        this.data = [
            {
                text: 'JS 공부하기',
                isCompleted: true
            },
            {
                text: 'JS 복습하기',
                isCompleted: false
            }
        ]
        this.init()        
    }
    init() {
        this.todoList = new TodoList(
            document.querySelector('#todo-list'),
            this.data
        )
        this.todoInput = new TodoInput(
            document.querySelector('#todo-input'),
            document.querySelector('#todo-add-button'),
            this.addTodo
        )   
        this.todoList.$list.addEventListener('removeTodo', (e) => {
            this.removeTodo(e.detail.id)
        })   
        this.todoList.$list.addEventListener('updateCompleted', (e) => {
            this.updateCompleted(e.detail.id)
        })
    }
    addTodo = (text) => {
        this.data.push({
            text: text,
            isCompleted: false
        })
        this.todoList.setState(this.data)
    }    
    removeTodo = (id) => {
        this.data.splice(id, 1)
        this.todoList.setState(this.data)
    }
    updateCompleted = (id) => {               
        this.data[id].isCompleted = !this.data[id].isCompleted        
        this.todoList.setState(this.data)
    }
}
export default App
