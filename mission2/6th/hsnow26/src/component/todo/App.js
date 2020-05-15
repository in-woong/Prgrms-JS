import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import {getTodo} from '../../utils/todo/filerter_item.js'
import {saveTodoInLocalStorage, getTodoInLocalStorage} from '../../store/index.js'

export default function App(){
    const $app = document.querySelector('#app')

    $app.addEventListener('todoRemoveAll', function (e) {
        setState([])
    });
    
    const onAddTodo = (todoText) => {
        const addedTodo = this.todos.concat(getTodo(todoText))
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
    
    const render = () => {
        this.todosList = new TodoList($app, this.todos, onRemoveTodo, isCompletedToggle)
        this.todosInput = new TodoInput(onAddTodo)
        this.todosCount = new TodoCount(this.todos)
    }

    const setState = (nextData) => {
        this.todos = nextData
        this.todosList.setState(this.todos)
        this.todosCount.setState(this.todos)
        saveTodoInLocalStorage(this.todos)
    }

    const init = () => {
        this.todos = getTodoInLocalStorage()
        render()
    }

    init()
}