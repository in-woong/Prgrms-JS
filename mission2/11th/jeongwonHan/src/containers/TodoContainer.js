import TodoList from "../components/TodoList.js"
import TodoInput from "../components/TodoInput.js"
import TodoRemoveAll from "../components/TodoRemoveAll.js"
import TodoCount from "../components/TodoCount.js"
import { getUuidv4 } from "../utils/Uuidv.js"

function TodoContainer({ $target, $state, setState }) {
  this.$target = $target
  this.$state = $state
  this.setState = setState

  this.todoInput = new TodoInput({
    $target: this.$target,
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
    $target: this.$target,
    state: this.$state,
    onRemoveAll: () => {
      const newData = []
      this.setState(newData)
    },
  })

  this.todoList = new TodoList({
    $target: this.$target,
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

  this.TodoCount = new TodoCount({ $target: this.$target, state: this.$state })
}

export default TodoContainer
