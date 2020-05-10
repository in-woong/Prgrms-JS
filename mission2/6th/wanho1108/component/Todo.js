import { isObjectType } from '../helper/validator.js'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'

export default function Todo(element, name) {
  if (!(this instanceof Todo)) {
    throw new Error('new 연산자를 사용해주세요.')
  }

  if (!(element instanceof HTMLDivElement)) {
    throw new Error('엘리먼트는 DIV 엘리먼트여야 합니다.')
  }

  const dataValidator = (data) => {
    if (!Array.isArray(data)) {
      throw new Error('데이터는 배열이여야 합니다.')
    }

    data.map((item) => {
      const { id, text, isCompleted } = item

      if (
        !(
          isObjectType(item, 'object') &&
          typeof id === 'number' &&
          typeof text === 'string' &&
          typeof isCompleted === 'boolean'
        )
      ) {
        throw new Error(
          '데이터의 값이 객체가 아니거나 잘못된 값을 가지고 있습니다.'
        )
      }
    })
  }

  this.$element = element
  this.name = name
  this.todos = null

  const onAdd = (text) => {
    const id = new Date().getTime()
    const newTodo = {
      id,
      text,
      isCompleted: false,
    }
    const todos = this.getState()
    this.setState([...todos, newTodo])
  }
  const onToggle = (id) => {
    const todos = this.getState().map((todo) => {
      return todo.id === id
        ? {
            ...todo,
            isCompleted: !todo.isCompleted,
          }
        : todo
    })
    this.setState([...todos])
  }
  const onRemove = (id) => {
    const todos = this.getState().filter((todo) => todo.id !== id)
    this.setState([...todos])
  }
  const onRemoveAll = () => {
    this.setState([])
  }

  const todoInput = new TodoInput({ onAdd })
  const todoList = new TodoList({ onRemove, onToggle })
  const todoCount = new TodoCount()

  const init = () => {
    this.todos = this.getState()
    dataValidator(this.todos)

    this.$element.appendChild(todoInput.$inputElement)
    this.$element.appendChild(todoInput.$buttonAddElement)
    this.$element.appendChild(todoInput.$buttonRemoveAllElement)
    this.$element.appendChild(todoList.$element)
    this.$element.appendChild(todoCount.$element)

    eventBinder()
  }

  const eventBinder = () => {
    todoInput.$buttonRemoveAllElement.addEventListener('removeAll', onRemoveAll)
  }

  this.setState = (nextData) => {
    dataValidator(nextData)
    this.todos = nextData
    localStorage.setItem(this.name, JSON.stringify(this.todos))
    this.render()
  }

  this.getState = () => {
    try {
      return this.todos || JSON.parse(localStorage.getItem(this.name) || '[]')
    } catch (e) {
      return []
    }
  }

  this.render = () => {
    const todos = this.getState()
    const completedTodos = todos.filter(({ isCompleted }) => isCompleted)

    todoCount.render(todos.length, completedTodos.length)
    todoList.render(todos)
  }

  init()
}
