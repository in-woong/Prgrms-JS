import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'

const $app = document.querySelector('#root')

const getMaxId = (todos) => {
  return Math.max(...todos.map((todo) => todo.id))
}

function App({ todos }) {
  this.state = {
    todos,
  }

  this.addTodo = ({ todo }) => {
    const newTodo = {
      id: `${getMaxId(this.state.todos) + 1}`,
      text: todo,
      isCompleted: false,
    }

    this.setState({
      key: 'todos',
      value: [newTodo, ...this.state.todos],
    })
  }

  this.setState = ({ key, value }) => {
    this.state = {
      ...this.state,
      [key]: value,
    }
    todoList.setState(this.state.todos)
  }

  this.handleDeleteTodoButtonClick = ({ clickedTodoId }) => {
    const updateTodos = this.state.todos.filter(
      ({ id }) => id !== clickedTodoId
    )

    this.setState({
      key: 'todos',
      value: updateTodos,
    })
  }

  this.handleTodoClick = ({ clickedTodoId }) => {
    const updateTodos = this.state.todos.map((todo) => {
      const { id, isCompleted } = todo

      const updateCompleted = id === clickedTodoId ? !isCompleted : isCompleted

      return {
        ...todo,
        isCompleted: updateCompleted,
      }
    })

    this.setState({ key: 'todos', value: updateTodos })
  }

  new TodoInput({
    $app,
    onChange: this.handleTodoInputChange,
    addTodo: this.addTodo,
  })

  const todoList = new TodoList({
    $app,
    state: this.state.todos,
    onDeleteTodoButtonClick: this.handleDeleteTodoButtonClick,
    onTodoClick: this.handleTodoClick,
  })
}

export default App
