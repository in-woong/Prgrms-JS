import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'

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
  this.$todoList = document.querySelector(`#todo-list`)
  this.$insertForm = document.querySelector('#insert-form')
  this.$removeAllBtn = document.querySelector('.remove-btn')

  this.setState = function (newData) {
    this.todos = newData
    this.todoList.setState(this.todos)
    this.todoCount.setState(this.todos)
  }

  // Todo 추가
  const onInsertTodo = (text) => {
    const lastId =
      this.todos.length !== 0
        ? parseInt(this.todos[this.todos.length - 1].id)
        : 0
    this.todos.push({
      id: lastId + 1,
      text: text,
      isCompleted: false,
    })
    this.setState(this.todos)
  }

  // Todo 삭제
  const onRemoveTodo = (id) => {
    const newTodos = this.todos.filter((todo) => {
      return todo.id !== id
    })
    this.todos = newTodos
    this.setState(this.todos)
  }

  // Todo 완료 표시 토글
  const onToggleTodo = (id) => {
    const newTodos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )
    this.todos = newTodos
    this.setState(this.todos)
  }

  // Todo Count
  const onCountTodo = () => {
    const total = this.todos.length
    const completed = this.todos.filter((todo) => todo.isCompleted == true)
      .length
    return { total, completed }
  }

  // 모두삭제 커스텀 이벤트
  this.$removeAllBtn.addEventListener('click', (e) => {
    const removeAllEvent = new CustomEvent('removeAll')
    this.$todoList.dispatchEvent(removeAllEvent)
  })
  this.$todoList.addEventListener('removeAll', (e) => {
    this.todos = []
    this.setState(this.todos)
  })

  this.render = function () {
    this.todoList = new TodoList({
      data: this.todos,
      $target: this.$todoList,
      onRemoveTodo,
      onToggleTodo,
    })
    this.todoInput = new TodoInput({
      $target: this.$insertForm,
      onInsertTodo,
    })
    this.todoCount = new TodoCount({
      data: this.todos,
      $target: this.$todoList,
      onCountTodo,
    })
  }
  this.render()
}

export default App
