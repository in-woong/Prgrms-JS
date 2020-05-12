import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import * as filters from '../../utils/todo/filerter_item.js'

export default function App(){
    this.todo = []
    const todoListHTML = document.querySelector('#todo-list')
    const todoInputHTML = document.querySelector('#todo-input')
    const todoAddBtnHTML = document.querySelector('#todo-add-btn')
    const todoCountHTML = document.querySelector('#todo-count')
    

    const addTodo = (todoText) => {
        const addedTodo = this.todo.concat(filters.getCreateTodo(todoText))
        setState(addedTodo)
    }

    const removeTodo = (removeIndex) => {
        const removedTodo = this.todo.filter((element, index) => index !== removeIndex)
        setState(removedTodo)
    }

    const isCompletedToggle = (updateIndex) => {
        const updatedIsCompletedTodo = this.todo.map((element, index) => 
          (index === updateIndex) ? ({...element, isCompleted : !element.isCompleted}) : element
        )
        setState(updatedIsCompletedTodo)
    }
    
    const setState = (nextData) => {
        this.todo = nextData
        this.todoList.setState(this.todo)
        this.todoCount.setState(this.todo)
    }

    const render = () => {
        this.todoList = new TodoList(todoListHTML, this.todo, removeTodo, isCompletedToggle)
        this.todoInput = new TodoInput(todoInputHTML, todoAddBtnHTML, addTodo)
        this.todoCount = new TodoCount(todoCountHTML, this.todo)
    }

    render()
}