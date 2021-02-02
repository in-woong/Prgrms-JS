import TodoInput from "./Components/todoInput.js";
import TodoList from "./Components/todoList.js";
import TodoCount from "./Components/todoCount.js";

function App($target) {
  this.$target = $target
  if (!localStorage.getItem('state')) {
    localStorage.setItem('state', JSON.stringify([]))
  }
  
  this.validate = (data) => {
    if(!new.target) {
      throw new Error("You need new keyword")
    }
    if(!data) {
      throw new Error("Your data is wrong")
    }
    data.forEach((todo) => {
      if (!(typeof todo.text === 'string' || typeof todo.isCompleted === 'boolean')) {
        throw new Error("Your data has wrong property")
      }
    })
  }

  this.addTodo = (todoText) => {
    const newData = JSON.parse(localStorage.getItem('state'))
    console.log(newData)
    newData.push({ text : todoText, isCompleted : false})
    this.setState(newData)
  }

  this.deleteTodo = (todoIndex) => {
    const newData = JSON.parse(localStorage.getItem('state')).filter((element, index) => index !== todoIndex)
    this.setState(newData)
  }

  this.changeTodoStatus = (todoIndex) => {
    const newData = JSON.parse(localStorage.getItem('state')).map((element, index) => (
      {...element , isCompleted : todoIndex === index ? !element.isCompleted : element.isCompleted }))
    this.setState(newData)
  }

  this.removeAll = () => {
    localStorage.setItem('state', JSON.stringify([]))
  }
  
  this.setState = (newData) => {
    this.validate(newData)
    localStorage.setItem('state', JSON.stringify(newData))
    const state = JSON.parse(localStorage.getItem('state'))
    new TodoList(document.querySelector('#todo-list'), state)
    new TodoCount(document.querySelector('#todo-count'), state)
    new TodoInput(document.querySelector('#todo-input'))
  }

  try {
    this.$target.innerHTML = '<div id="todo-list"></div><div id="todo-count"></div><div id="todo-input"></div>'
    this.setState(JSON.parse(localStorage.getItem('state')))

    document.querySelector('#todo-list').addEventListener('click', (event) => {
      if (event.target.id === 'todo'){
        this.changeTodoStatus(event.target.dataset.index*1)
      } else if (event.target.id === 'todo-button') {
        this.deleteTodo(event.target.dataset.index*1)
      }
    })

    document.querySelector('#todo-input').addEventListener('keydown', (keyboardEvent) => {
      if(keyboardEvent.key === 'Enter') {
        this.addTodo(keyboardEvent.target.value)
      }
    })

    document.querySelector('#todo-input').addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        this.removeAll()
      }
    })



  } catch(e) {
    console.log(e)
  }
}

new App(document.querySelector('#app'));
