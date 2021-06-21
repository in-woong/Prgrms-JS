import TodoList from '../components/TodoList.js'
import TodoInput from '../components/TodoInput.js'
import TodoDeleteAll from '../components/TodoDeleteAll.js'
import TodoCount from '../components/TodoCount.js'
import { api } from '../api/api.js'

function TodoContainer({ $target, state, setState, setNextState }) {
  this.$target = $target
  this.state = state
  this.setState = setState
  this.setNextState = setNextState

  this.todoInput = new TodoInput({
    $target: this.$target,
    onAddTodo: async (todoText) => {
      const content = { content: todoText }
      try {
        await api.addUserTodo(content, this.state.userName)
        const nextState = await this.setNextState(this.state.userName)
        this.setState(nextState)
      } catch (e) {
        console.log(e)
      }
    },
  })

  this.todoDeleteAll = new TodoDeleteAll({
    $target: this.$target,
    state: this.state,
    onDeleteAll: async () => {
      try {
        await api.deleteAllUserTodo(this.state.userName)
        const nextState = await this.setNextState(this.state.userName)
        this.setState(nextState)
      } catch (e) {
        console.log(e)
      }
    },
  })

  this.todoList = new TodoList({
    $target: this.$target,
    state: this.state,
    onToggleTodo: async (todoId) => {
      try {
        await api.toggleUserTodo(this.state.userName, todoId)
        const nextState = await this.setNextState(this.state.userName)
        this.setState(nextState)
      } catch (e) {
        console.log(e)
      }
    },
    onDeleteTodo: async (todoId) => {
      try {
        await api.deleteUserTodo(this.state.userName, todoId)
        const nextState = await this.setNextState(this.state.userName)
        this.setState(nextState)
      } catch (e) {
        console.log(e)
      }
    },
  })

  this.todoCount = new TodoCount({ $target: this.$target, state: this.state })
}

export default TodoContainer
