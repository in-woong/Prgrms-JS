import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import {createTodo} from '../../utils/todo/filerter_item.js'
import {saveTodoInLocalStorage, getTodoInLocalStorage} from '../../store/index.js'

export default function App(){
    const $app = document.querySelector('#app')

    $app.addEventListener('todoRemoveAll', function (e) {
        setState([])
    });
    
    const onAddTodo = (todoText) => {
        const addedTodo = this.todos.concat(createTodo(todoText))
        setState(addedTodo)
    }

    const onRemoveTodo = (removeIndex) => {
        const removedTodo = this.todos.filter((element, index) => index !== removeIndex)
        setState(removedTodo)
    }

    const isCompletedToggle = (updateIndex) => {
        const updatedIsCompletedTodo = this.todos.map((element, index) => 
          (index === updateIndex) ? ({...element, isCompleted : !element.isCompleted}) : element
        )
        setState(updatedIsCompletedTodo)
    }
    
    const makeSubComponent = () => {
        this.todoList = new TodoList($app, this.todos, onRemoveTodo, isCompletedToggle)
        this.todoInput = new TodoInput(onAddTodo)
        this.todoCount = new TodoCount(this.todos)
    }

    const setState = (nextData) => {
        this.todos = nextData
        this.todoList.setState(this.todos)
        this.todoCount.setState(this.todos)
        saveTodoInLocalStorage(this.todos)
    }

    const init = () => {
        this.todos = getTodoInLocalStorage()
        makeSubComponent()
    }

    init()
}