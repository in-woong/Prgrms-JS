import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'

function App() {
  const todos = [
    {
      text: 'JS 공부하기',
      isCompleted: true,
    },
    {
      text: 'JS 복습하기',
      isCompleted: false,
    },
  ]

  this.todos = todos

  this.toggleTodo = clickedIndex => {
    this.todos[clickedIndex] = {
      ...this.todos[clickedIndex],
      isCompleted: !this.todos[clickedIndex].isCompleted,
    }
    this.render()
  }

  this.removeTodo = clickedIndex => {
    this.todos.splice(clickedIndex, 1)
    this.render()
  }

  this.addTodo = newTodo => {
    this.todos.push(newTodo)
    this.render()
  }

  new TodoInput(this.addTodo)
  this.todoList = new TodoList(this.todos, this.toggleTodo, this.removeTodo)
  this.todoList.render() // 초기에 2개의 데이터 그려주기 위함

  this.render = () => {
    this.todoList.setState(this.todos)
  }
}

new App()
