import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import TodoCount from './TodoCount.js'

export default function Todo($element, name) {
  if (!(this instanceof Todo)) {
    throw new Error('new 연산자를 사용해주세요.')
  }

  if (!($element instanceof HTMLDivElement)) {
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

  const getLocalStorage = () => {
    try {
      return JSON.parse(localStorage.getItem(this.name) || '[]')
    } catch (e) {
      return []
    }
  }

  const setLocalStorage = (data) => {
    localStorage.setItem(this.name, JSON.stringify(data))
  }

  this.$element = $element
  this.name = name

  let todos = getLocalStorage()

  dataValidator(todos)

  const onAdd = (text) => {
    const id = new Date().getTime()
    const newTodo = {
      id,
      text,
      isCompleted: false,
    }
    this.setState([...todos, newTodo])
  }
  const onToggle = (id) => {
    const newTodos = todos.map((todo) => {
      return todo.id === id
        ? {
            ...todo,
            isCompleted: !todo.isCompleted,
          }
        : todo
    })
    this.setState([...newTodos])
  }
  const onRemove = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    this.setState([...newTodos])
  }
  const onRemoveAll = () => {
    this.setState([])
  }

  const todoInput = new TodoInput({ onAdd })
  const todoList = new TodoList({ data: todos, onRemove, onToggle })
  const todoCount = new TodoCount(todos)

  const init = () => {
    this.$element.appendChild(todoInput.$inputElement)
    this.$element.appendChild(todoInput.$buttonAddElement)
    this.$element.appendChild(todoInput.$buttonRemoveAllElement)
    this.$element.appendChild(todoList.$element)
    this.$element.appendChild(todoCount.$element)

    todoInput.$buttonRemoveAllElement.addEventListener('removeAll', onRemoveAll)
  }

  this.setState = (nextData) => {
    dataValidator(nextData)
    todos = nextData
    todoList.setState(todos)
    todoCount.setState(todos)
    setLocalStorage(todos)
    this.render()
  }

  this.render = () => {
    todoList.render()
    todoCount.render()
  }

  init()
}
