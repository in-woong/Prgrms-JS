import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'

export default function TodoApp($target, title, TODOS_LS) {
  this.$target = $target
  this.title = title
  this.TODOS_LS = TODOS_LS
  this.todos = (localStorage.getItem(this.TODOS_LS)) ? JSON.parse(localStorage.getItem(this.TODOS_LS)) : []
  
  this.saveTodo = (todos) => {
    localStorage.setItem(TODOS_LS, JSON.stringify(todos))
  }

  this.getTodo = () => {
    return JSON.parse(localStorage.getItem(this.TODOS_LS))
  }

  this.handleAddTodo = (inputData) => {
    if(inputData){
      this.todos.push({
        id: Date.now(),
        text: inputData,
        isCompleted: false
      })
    }
    this.todoList.render()
    this.todoCount.render()
    this.saveTodo(this.todos)
  }

  this.handleToggleCompleted = (liItemId) => {
    const newData = this.todos.map(item => {
      const newObj = { ...item }
      if(newObj.id === liItemId) {
        newObj.isCompleted = !newObj.isCompleted
      }
      return newObj
    })
    this.setState(newData)
    this.saveTodo(this.todos)
  }

  this.handleRemoveAll = () => {
    this.setState([])
    localStorage.removeItem(this.TODOS_LS)
  }
  
  this.render = () => {
    const todoInputBoxSelector = 'box-todo-input'
    const todoListSelector = 'list-todo'
    const todoCountSelector = 'box-todo-count'
    const btnRemoveAllSelector = 'btn-remove-all'
    this.$target.innerHTML = `<strong class="subject-todo">${this.title}</strong>
                              <div class=${todoInputBoxSelector}></div>
                              <ul class=${todoListSelector}></ul>
                              <div class=${todoCountSelector}></div>
                              <div class="box-remove-all"><button class=${btnRemoveAllSelector}>Remove All</button></div>`

    this.todoInput = new TodoInput($target, `.${todoInputBoxSelector}`, this.handleAddTodo)
    this.todoList = new TodoList($target, this.todos, `.${todoListSelector}`,  this.handleToggleCompleted)
    this.todoCount = new TodoCount($target, this.todos, `.${todoCountSelector}`)
    
    const $btnRemoveAll = this.$target.querySelector(`.${btnRemoveAllSelector}`)
    $btnRemoveAll.addEventListener('click', () => {
      this.handleRemoveAll()
    })
  }

  this.setState = (nextState) => {
    this.todos = nextState
    this.todoList.setState(nextState)
    this.todoCount.setState(nextState)
  }

  this.render()
}
 