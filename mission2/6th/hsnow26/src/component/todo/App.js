import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import * as filters from '../../utils/todo/filerter_item.js'
import * as store from '../../store/index.js'

export default function App(){
    const $todoList = document.querySelector('#todo-list')
    const $todoInput = document.querySelector('#todo-input')
    const $todoAddBtn = document.querySelector('#todo-add-btn')
    const $todoCount = document.querySelector('#todo-count')
    const $todoRemoveAllBtn = document.querySelector('#todo-remove-all-btn')


    $todoRemoveAllBtn.addEventListener('todoRemoveAll', function (e) {
        const removedAllTodo = []
        setState(removedAllTodo)
    });
    
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
    
    const render = () => {
        this.todoList = new TodoList($todoList, this.todo, removeTodo, isCompletedToggle, $todoRemoveAllBtn)
        this.todoInput = new TodoInput($todoInput, $todoAddBtn, addTodo)
        this.todoCount = new TodoCount($todoCount, this.todo)
    }

    const setState = (nextData) => {
        this.todo = nextData
        this.todoList.setState(this.todo)
        this.todoCount.setState(this.todo)
        store.saveTodoInLocalStorage(this.todo)
    }

    const init = () => {
        this.todo = store.getTodoInLocalStorage()
        render()
    }

    init()
}