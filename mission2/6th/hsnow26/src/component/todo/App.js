import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import {getCreateTodo} from '../../utils/todo/filerter_item.js'
import {saveTodoInLocalStorage, getTodoInLocalStorage} from '../../store/index.js'

export default function App(){
    const $app = document.querySelector('#app')

    $app.addEventListener('todoRemoveAll', function (e) {
        setState([])
    });
    
    const onAddTodo = (todoText) => {
        const addedTodo = this.todo.concat(getCreateTodo(todoText))
        setState(addedTodo)
    }

    const onRemoveTodo = (removeIndex) => {
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
        this.todoList = new TodoList($app, this.todo, onRemoveTodo, isCompletedToggle)
        this.todoInput = new TodoInput(onAddTodo)
        this.todoCount = new TodoCount(this.todo)
    }

    const setState = (nextData) => {
        this.todo = nextData
        this.todoList.setState(this.todo)
        this.todoCount.setState(this.todo)
        saveTodoInLocalStorage(this.todo)
    }

    const init = () => {
        this.todo = getTodoInLocalStorage()
        render()
    }

    init()
}