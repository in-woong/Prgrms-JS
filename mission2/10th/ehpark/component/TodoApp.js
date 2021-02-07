import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import { storage } from './utils.js'

export default function TodoApp({ $target, title, TODOS_KEY }) {
  this.$target = $target
  this.title = title
  this.TODOS_KEY = TODOS_KEY
  this.todos = (localStorage.getItem(this.TODOS_KEY)) ? storage.get(this.TODOS_KEY) : []

  this.todosClassName = {
    todoInputBox : 'box-todo-input',
    todoList : 'list-todo',
    todoCount : 'box-todo-count',
    btnRemoveAll : 'btn-remove-all'
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
    storage.set(this.TODOS_KEY, this.todos)
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
    storage.set(this.TODOS_KEY, this.todos)
  }

  this.handleRemoveAll = () => {
    this.setState([])
    localStorage.removeItem(this.TODOS_KEY)
  }

  this.render = () => {
    const { todoInputBox, todoList, todoCount, btnRemoveAll } = this.todosClassName
    this.$target.innerHTML = `<strong class="subject-todo">${this.title}</strong>
                              <div class=${todoInputBox}></div>
                              <ul class=${todoList}></ul>
                              <div class=${todoCount}></div>
                              <div class="box-remove-all"><button class=${btnRemoveAll}>Remove All</button></div>`

    this.todoInput = new TodoInput({ 
      $target, 
      todoInputBox: `.${todoInputBox}`,
      btnRemoveAll: `.${btnRemoveAll}`,
      onAddTodo: this.handleAddTodo.bind(this),
      onRemoveAll: this.handleRemoveAll.bind(this),
    })
    this.todoList = new TodoList({
      $target,
      data: this.todos, 
      todoList: `.${todoList}`, 
      onToggleCompleted: this.handleToggleCompleted.bind(this)
    })
    this.todoCount = new TodoCount({
      $target,
      data: this.todos,
      todoCount: `.${todoCount}`
    })
  }

  this.setState = (nextState) => {
    this.todos = nextState
    this.todoList.setState(nextState)
    this.todoCount.setState(nextState)
  }

  this.render()
}
 