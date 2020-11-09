import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'

export default function App(data){
    this.data = data
    this.todoList = new TodoList(document.querySelector('#todo-list'), data)
    this.todoInput = new TodoInput(document.querySelector('#todo-input'), this)
    
    this.addTodo = (newTodo) => {
      this.data.push(newTodo)
      this.todoList.setState(this.data)
    }
    
}


