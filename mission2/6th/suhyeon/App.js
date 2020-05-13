import TodoInput from './TodoInput.js'
import TodoList from  './TodoList.js'
import TodoCount from './TodoCount.js'

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
        this.todoCount = new TodoCount({
            $element: document.querySelector('#todo-count'),
            totalCount: this.data.length,
            completedCount: this.getCompletedCount()
        })   
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
        this.setState()
    }    
    removeTodo = (id) => {
        this.data.splice(id, 1)
        this.setState()    
    }
    updateCompleted = (id) => {               
        this.data[id].isCompleted = !this.data[id].isCompleted  
        this.setState()              
    }
    setState = () => {
        this.todoList.setState(this.data)
        this.todoCount.setState(this.data.length, this.getCompletedCount())
    }
    getCompletedCount = () => {
        return this.data.filter(todo => todo.isCompleted).length
    }
}
export default App
