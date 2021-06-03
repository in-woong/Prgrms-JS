import { $ } from '../utils/dom.js'
import TodoInput from './todoInput.js'
import TodoList from './todoList.js'
import { todoStore } from '../store/todoStroe.js'
import checkTodoListState from '../validators/checkTodoListState.js'
import todoAppTemplate from '../layouts/todoAppTemplate.js'

export default class TodoApp {
  constructor($app) {
    this.state = todoStore.loadState()
    checkTodoListState(this.state)

    $app.innerHTML = todoAppTemplate()

    this.todoInput = new TodoInput($('.todo-input'))
    this.todoInput.setAddTodoItem((target) => {
      const text = target.value
      const newTodoItem = {
        id: new Date().getTime(),
        text: text,
        isCompleted: false,
      }
      this.setState([...this.state, newTodoItem])
    })
    this.todoInput.setClearTodoList(() => {
      this.setState([])
    })

    this.todoList = new TodoList($('.todo-list'), this.state)
    this.todoList.setDeleteTodoItem((id) => {
      const newState = this.state.filter((todoItem) => todoItem.id !== id)
      this.setState(newState)
    })
    this.todoList.setToggleTodoItem((target) => {
      target.classList.toggle('completed')
    })
  }

  setState(nextState) {
    this.state = nextState
    checkTodoListState(this.state)
    this.todoList.setState(this.state)
    todoStore.setState(this.state)
    todoStore.saveState()
  }

  render() {
    this.todoInput.render()
    this.todoList.render()
  }
}
