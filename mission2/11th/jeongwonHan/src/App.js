import TodoContainer from "./containers/TodoContainer.js"

function App($target) {
  this.$target = $target
  const storageTodo = JSON.parse(localStorage.getItem("TODOLIST"))
  this.$state = storageTodo ? [...storageTodo] : []

  this.$todoListDiv1 = document.createElement("div")
  this.$todoListDiv1.setAttribute("data-component-type", "TodoList1")

  this.$target.appendChild(this.$todoListDiv1)

  this.todoContainer = new TodoContainer({
    $target: this.$todoListDiv1,
    $state: this.$state,
    setState: this.setState,
  })

  this.setState = (nextState) => {
    this.$state = nextState
    this.todoList.setState(this.$state)
    this.TodoCount.setState(this.$state)
    localStorage.setItem("TODOLIST", JSON.stringify(this.$state))
  }
}

export default App
