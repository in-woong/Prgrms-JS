import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import { useNewKeyword, isArrayState, checkTypes } from './validation.js'

export default class App {
  constructor({
    $todoListTarget,
    $todoCountTarget,
    $todoInputTarget,
    todoData,
  }) {
    useNewKeyword(new.target)
    this.validData(todoData)

    this.todoData = todoData

    this.todoList = new TodoList({
      todoData: this.todoData,
      $target: $todoListTarget,
      toggleTodo: this.toggleTodo.bind(this),
      deleteTodo: this.deleteTodo.bind(this),
    })

    this.todoCount = new TodoCount({
      numOfTodo: this.todoData.length,
      numOfCompleteTodo: this.todoData.filter((todo) => todo.isCompleted)
        .length,
      $target: $todoCountTarget,
    })

    this.todoInput = new TodoInput({
      $target: $todoInputTarget,
      insertTodo: this.insertTodo.bind(this),
      deleteAllTodo: this.deleteAllTodo.bind(this),
    })
  }

  setState(nextTodoData) {
    this.validData(nextTodoData)
    this.todoData = nextTodoData

    this.todoList.setState({ nextData: this.todoData })
    this.todoCount.setState({
      numOfTodo: this.todoData.length,
      numOfCompleteTodo: this.todoData.filter((todo) => todo.isCompleted)
        .length,
    })
  }

  validData(todoData) {
    isArrayState(todoData)
    checkTypes(
      todoData,
      ({ text, isCompleted }) =>
        typeof text === 'string' && typeof isCompleted === 'boolean'
    )
  }

  insertTodo(newTodoText) {
    const nextTodoData = [
      {
        text: newTodoText,
        isCompleted: false,
      },
      ...this.todoData,
    ]

    this.setState(nextTodoData)
  }

  toggleTodo(toggleTodoIndex) {
    const nextTodoData = this.todoData.slice()

    nextTodoData.splice(toggleTodoIndex, 1, {
      text: nextTodoData[toggleTodoIndex].text,
      isCompleted: !nextTodoData[toggleTodoIndex].isCompleted,
    })

    this.setState(nextTodoData)
  }

  deleteTodo(deleteTodoIndex) {
    const nextTodoData = this.todoData.slice()
    nextTodoData.splice(deleteTodoIndex, 1)

    this.setState(nextTodoData)
  }

  deleteAllTodo() {
    this.setState([])
  }
}
