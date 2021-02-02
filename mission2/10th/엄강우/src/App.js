import TodoInput from "./Components/todoInput.js";
import TodoList from "./Components/todoList.js";


const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

function App($target, initialState) {
  this.$target = $target
  this.state = initialState
  this.validate = (data) => {
    if(!new.target) {
      throw new Error("You need new keyword")
    }
    if(!data) {
      throw new Error("Your data is wrong")
    }
    data.forEach(todo => {if (typeof todo.text === 'string' || typeof todo.isCompleted === 'boolean') {
      throw new Error("Your data has wrong property")
    }})
  }
  this.addTodo = ($target, todoText) => {
    const newData = this.state
    newData.push({ text : todoText, isCompleted : false})
    this.setState(newData)
    $target.focus()
  }

  this.deleteTodo = (todoIndex) => {
    const newData = this.state.filter((element, index) => index !== todoIndex)
    this.setState(newData)
  }

  this.changeTodoStatus = (todoIndex) => {
    const newData = this.state.map((element, index) => (
      {...element , isCompleted : todoIndex === index ? !element.isCompleted : element.isCompleted }))
    this.setState(newData)
  }
  
  this.setState = (newData) => {
    this.validate(newData)
    this.state = newData
    new TodoList(document.querySelector('#todo-list'), this.state)
    new TodoInput(document.querySelector('#todo-input'))
  }

  try {
    this.$target.innerHTML = '<div id="todo-list"></div><div id="todo-input"></div>'
    this.setState(data)

    document.querySelector('#todo-list').addEventListener('click', (event) => {
      if (event.target.id === 'todo'){
        this.changeTodoStatus(event.target.dataset.index*1)
      } else if (event.target.id === 'todo-button') {
        this.deleteTodo(event.target.dataset.index*1)
      }
    })

    document.querySelector('#todo-input').addEventListener('keydown', (keyboardEvent) => {
      if(keyboardEvent.key === 'Enter') {
        this.addTodo(keyboardEvent.target, keyboardEvent.target.value)
      }
    })



  } catch(e) {
    console.log(e)
  }
}

new App(document.querySelector('#app'), data);
