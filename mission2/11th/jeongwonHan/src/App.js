import TodoList from "./components/TodoList.js"
import TodoInput from "./components/TodoInput.js"
import TodoRemoveAll from "./components/TodoRemoveAll.js"
import TodoCount from "./components/TodoCount.js"
import { getUuidv4 } from "../utils/Uuidv.js"

function App($target) {
  this.$target = $target
  const storageTodo = JSON.parse(localStorage.getItem("TODOLIST"))
  this.$state = storageTodo ? [...storageTodo] : []

  this.todoInput = new TodoInput({
    $app: this.$target,
    onAddTodo: (todoText) => {
      const newData = [
        ...this.$state,
        {
          id: getUuidv4(),
          text: todoText,
          isCompleted: false,
        },
      ]
      this.setState(newData)
    },
  })

  this.todoRemoveAll = new TodoRemoveAll({
    $app: this.$target,
    state: this.$state,
    onRemoveAll: () => {
      const newData = []
      this.setState(newData)
    },
  })
  this.todoList = new TodoList({
    $app: this.$target,
    initialState: this.$state,
    onCompleteToggle: (selectId) => {
      const newData = this.$state.map((todo) =>
        todo.id === selectId
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo
      )
      this.setState(newData)
    },
    onDeleteTodo: (selectId) => {
      const newData = this.$state.filter((todo) => todo.id !== selectId)
      this.setState(newData)
    },
  })

  this.TodoCount = new TodoCount({ $app: this.$target, state: this.$state })

  this.setState = (nextState) => {
    this.$state = nextState
    this.todoList.setState(this.$state)
    this.TodoCount.setState(this.$state)
    localStorage.setItem("TODOLIST", JSON.stringify(this.$state))
  }
}

export default App
