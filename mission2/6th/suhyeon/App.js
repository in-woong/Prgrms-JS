import TodoInput from './TodoInput.js'
import TodoList from  './TodoList.js'
import TodoCount from './TodoCount.js'

class App {
    constructor($app) {
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
        this.$app = $app
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
            document.querySelector('#all-remove-button'),
            this.addTodo
        )
        this.todoCount = new TodoCount({
            $element: document.querySelector('#todo-count'),
            data: this.data            
        })   
        this.$app.addEventListener('removeTodo', (e) => {
            this.removeTodo(e.detail.id)
        })   
        this.$app.addEventListener('updateCompleted', (e) => {
            this.updateCompleted(e.detail.id)
        })
        this.$app.addEventListener('removeAll', () => {
            this.data = []
            console.log(this.data)
            this.setState()
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
        this.todoCount.setState(this.data)
    }    
}
export default App
