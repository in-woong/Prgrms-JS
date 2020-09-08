import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'

function App() {
  let todoData = [
    {
      id: 1,
      text: '방 청소하기',
      isCompleted: false,
    },
    {
      id: 2,
      text: '치과 예약하기',
      isCompleted: true,
    },
  ]
  this.todos = todoData
  this.setState = function (newData) {
    this.todos = newData
    this.todoList.setState(this.todos)
  }

  //   const insertTodo = function (text) {
  //     this.todos.push({
  //       id: parseInt(this.todos[this.todos.length - 1].id) + 1,
  //       text: text,
  //       isCompleted: false,
  //     })
  //     this.setState(newData)
  //   }

  this.render = function () {
    this.$todoList = document.querySelector(`#todo-list`)
    this.$insertForm = document.querySelector('#insert-form')
    this.todoList = new TodoList({
      data: this.todos,
      $target: this.$todoList,

      deleteTodo: (id) => {
        const newTodos = this.todos.filter((todo) => {
          return todo.id !== id
        })
        this.todos = newTodos
        this.setState(this.todos)
      },

      toggleTodo: (id) => {
        const newTodos = this.todos.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
        this.todos = newTodos
        this.setState(this.todos)
      },
    })
    this.todoInput = new TodoInput({
      $target: this.$insertForm,
      insertTodo: (text) => {
        this.todos.push({
          id: parseInt(this.todos[this.todos.length - 1].id) + 1,
          text: text,
          isCompleted: false,
        })
        this.setState(this.todos)
      },
      //   insertTodo: insertTodo,
    })
  }
  this.render()
}

export default App
