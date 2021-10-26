import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import { getCompletedTodosCount, getTodosCount } from './utils/getCount.js'

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

    const { todos } = this.state

    todoList.setState(todos)
    allCount.setState(getTodosCount({ todos }))
    completedCount.setState(getCompletedTodosCount({ todos }))
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
    const { todos } = this.state

    const updateTodos = todos.map((todo) => {
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

  const allCount = new TodoCount({
    $app,
    title: '전체 TODO',
    state: getTodosCount({ todos: this.state.todos }),
  })

  const completedCount = new TodoCount({
    $app,
    title: '완료된 TODO',
    state: getCompletedTodosCount({ todos: this.state.todos }),
  })
}

export default App
