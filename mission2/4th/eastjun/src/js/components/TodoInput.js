import TodoList from './TodoList'
import TodoItem from './TodoItem'

const TodoInput = (() => {
  const ENTER_KEY = 13
  const $input = document.getElementById('todo-input')

  const _add = (event) => {
    const todoTitle = event.target.value
    if (event.which === ENTER_KEY && todoTitle !== '') {
      const newTodoItem = new TodoItem(todoTitle)
      TodoList.add(newTodoItem)
      _initValue()
    }
  }

  const _initValue = () => {
    $input.value = ''
  }

  const _initEventListner = () => {
    $input.addEventListener('keydown', _add)
  }

  const init = () => {
    _initValue()
    _initEventListner()
  }

  return {
    init,
  }
})()

export default TodoInput
