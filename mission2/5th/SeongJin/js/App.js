import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'

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

  this.customEvent = e => {
    this.todoList.$todoList.dispatchEvent(e)
    //dispatchEvent 메서드는 그 이벤트의 타입이 메서드의 호출이전에 초기화되지 않았을 경우 에러처리..
  }

  this.removeAllTodo = () => {
    this.todos.splice(0, this.todos.length)
    this.render()
  }

  this.todoInput = new TodoInput(this.addTodo, this.customEvent)
  this.todoList = new TodoList(
    this.todos,
    this.toggleTodo,
    this.removeTodo,
    this.removeAllTodo
  )
  this.todoCount = new TodoCount(this.todos)

  this.render = () => {
    this.todoList.setState(this.todos)
    this.todoCount.render()
  }

  this.todoList.render()
}

new App()
