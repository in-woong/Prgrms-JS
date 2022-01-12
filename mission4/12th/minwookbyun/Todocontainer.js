import TodoList from "./TodoList.js"
import TodoInput from "./TodoInput.js"
import RemoveAll from "./RemoveAll.js"
import { onAddTodo, removeTodo, removeAll, toggleTodoItem } from "./Information/API.js"


export default function TodoContainer({ state, setState, updatedTodos}) {
    this.$target = document.querySelector('.section_userinput')
    this.state = state
    this.setState= setState
    this.updatedTodos = updatedTodos
  
    this.todoInput = new TodoInput({
      $target:  document.querySelector('.section_userinput'),
      addTodoItem: async (todoText) => { //이름 다르게 해야함?
          await onAddTodo(this.state.username, todoText)
          const nextState = await this.updatedTodos(this.state.username)
          this.setState(nextState)
        } 
    }),
  
    this.removeAll = new RemoveAll({
      $target: this.$target,
      state: this.state,
      onRemoveAll : async () => {
          await removeAll(this.state.username)
          const nextState = await this.updatedTodos(this.state.username)
          this.setState(nextState)
      },
    })
  
    this.todoList = new TodoList({
      $target: document.querySelector('.section_todolist'),
      initialState: {
        ...this.state,
        todos: this.state.todos.filter(({isCompleted}) => !isCompleted)
      },
      onToggleTodoItem: async (id) => {
          await toggleTodoItem(this.state.username, id)
          const nextState = await this.updatedTodos(this.state.username)
          this.setState(nextState)
      },
      onRemoveTodo: async (id) => {
          await removeTodo(this.state.username, id)
          const nextState = await this.updatedTodos(this.state.username)
          this.setState(nextState)
      },
    })
  
    this.setState = (nextState) => {
      this.state = nextState
      this.todoList.setState({
        ...this.state,
        todos: this.state.todos.filter(({isCompleted}) => !isCompleted),
      })
    }
  }
