import TodoList from '../components/todo/TodoList.js'
import TodoInput from '../components/todo/TodoInput.js'
import TodoDeleteAll from '../components/todo/TodoDeleteAll.js'
import TodoCount from '../components/todo/TodoCount.js'
import { api } from '../api/api.js'

function TodoContainer({ $target, state, setAllState, setNextState }) {
  this.$target = $target
  this.state = state
  this.setAllState = setAllState
  this.setNextState = setNextState

  this.todoInput = new TodoInput({
    $target: this.$target.querySelector('.todoHeaderContainer'),
    onAddTodo: async (todoText) => {
      const content = { content: todoText }
      try {
        await api.addUserTodo(content, this.state.userName)
        const nextState = await this.setNextState(this.state.userName)
        this.setAllState(nextState)
      } catch (e) {
        console.log(e)
      }
    },
  })

  this.todoDeleteAll = new TodoDeleteAll({
    $target: this.$target.querySelector('.todoHeaderContainer'),
    state: this.state,
    onDeleteAll: async () => {
      try {
        await api.deleteAllUserTodo(this.state.userName)
        const nextState = await this.setNextState(this.state.userName)
        this.setAllState(nextState)
      } catch (e) {
        console.log(e)
      }
    },
  })
  this.runningTodoList = new TodoList({
    $target: this.$target.querySelector('.runningTodoList'),
    state: {
      ...this.state,
      todos: this.state.todos.filter(({ isCompleted }) => !isCompleted),
    },
    onToggleTodo: async (todoId) => {
      try {
        await api.toggleUserTodo(this.state.userName, todoId)
        const nextState = await this.setNextState(this.state.userName)
        this.setAllState(nextState)
      } catch (e) {
        console.log(e)
      }
    },
    onDeleteTodo: async (todoId) => {
      try {
        await api.deleteUserTodo(this.state.userName, todoId)
        const nextState = await this.setNextState(this.state.userName)
        this.setAllState(nextState)
      } catch (e) {
        console.log(e)
      }
    },
  })

  this.completedTodoList = new TodoList({
    $target: this.$target.querySelector('.completedTodoList'),
    state: {
      ...this.state,
      todos: this.state.todos.filter(({ isCompleted }) => isCompleted),
    },
    onToggleTodo: async (todoId) => {
      try {
        await api.toggleUserTodo(this.state.userName, todoId)
        const nextState = await this.setNextState(this.state.userName)
        this.setAllState(nextState)
      } catch (e) {
        console.log(e)
      }
    },
    onDeleteTodo: async (todoId) => {
      try {
        await api.deleteUserTodo(this.state.userName, todoId)
        const nextState = await this.setNextState(this.state.userName)
        this.setAllState(nextState)
      } catch (e) {
        console.log(e)
      }
    },
  })

  this.todoCount = new TodoCount({ $target: this.$target, state: this.state })

  this.setState = (nextState) => {
    this.state = nextState
    this.runningTodoList.setState({
      ...this.state,
      todos: this.state.todos.filter(({ isCompleted }) => !isCompleted),
    })
    this.completedTodoList.setState({
      ...this.state,
      todos: this.state.todos.filter(({ isCompleted }) => isCompleted),
    })
    this.todoCount.setState(this.state)
  }
}

export default TodoContainer
