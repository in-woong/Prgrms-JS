import TodoList from "./TodoList.js"
import TodoInput from "./TodoInput.js"
import TodoRemoveAll from "./TodoRemoveAll.js"

function App($target) {
  this.$target = $target
  const storageTodo = JSON.parse(localStorage.getItem("TODOLIST"))
  this.$state = storageTodo ? [...storageTodo] : []

  this.todoInput = new TodoInput(this.$target, (todoText) => {
    const newData = [
      ...this.$state,
      {
        id: this.$state.length + 1,
        text: todoText,
        isCompleted: false,
      },
    ]
    this.setState(newData)
  })
  this.todoRemoveAll = new TodoRemoveAll(this.$target, this.$state, () => {
    const newData = []
    this.setState(newData)
  })

  this.todoList = new TodoList(this.$target, this.$state, (selectId) => {
    const newData = this.$state.map((todo) =>
      todo.id === selectId
        ? {
            ...todo,
            isCompleted: !todo.isCompleted,
          }
        : todo
    )
    this.setState(newData)
  })

  this.setState = (nextState) => {
    this.$state = nextState
    this.todoList.setState(this.$state)
    localStorage.setItem("TODOLIST", JSON.stringify(this.$state))
  }
}

export default App
