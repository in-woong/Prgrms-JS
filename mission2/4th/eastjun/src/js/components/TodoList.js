import TodoItemTemplate from '../templates/TodoItemTemplate'
import TodoCount from './TodoCount'

const TodoList = (() => {
  const _$todoList = document.getElementById('todo-list')
  let _todoItems = []
  const $removeAllBtn = document.getElementById('remove-all-btn')
  const todoItemTemplate = new TodoItemTemplate()

  const add = (todoItem) => {
    _todoItems.push(todoItem)
    _$todoList.insertAdjacentHTML('beforeend', todoItemTemplate.render(todoItem))
    _updateStore()
    _dispatchUpdateEvent()
  }

  const _render = () => {
    const template = _todoItems.map((item) => todoItemTemplate.render(item))
    _$todoList.innerHTML = template.join('')
  }

  const _toggleTodoItem = (event) => {
    const targetTodoItem = event.target.closest('li')
    targetTodoItem.classList.toggle('completed')
    _completeTodo(targetTodoItem.dataset.id)
  }

  const _removeTodoItem = (event) => {
    const result = window.confirm('정말로 삭제하시겠습니까?')
    const $target = event.target.closest('li')
    if (result) {
      const index = _todoItems.findIndex((item) => item._id === $target.dataset.id)
      _todoItems.splice(index, 1)
      $target.remove()
      _dispatchUpdateEvent()
      _updateStore()
    }
  }

  const _completeTodo = (id) => {
    const index = _todoItems.findIndex((item) => item._id === id)
    if (!_todoItems[index]) throw new Error('존재하지 않는 데이터입니다.')
    _updateTodoItem(index)
  }

  const _updateTodoItem = (index) => {
    _todoItems[index]._isCompleted = !_todoItems[index]._isCompleted
    _dispatchUpdateEvent()
    _updateStore()
  }

  const _getItemsCount = () => _todoItems.length

  const _getCompletedCount = () => _todoItems.filter((item) => item._isCompleted === true).length

  const _removeAll = () => {
    const result = window.confirm('정말로 삭제하시겠습니까?')
    if (result) {
      _todoItems = []
      while (_$todoList.firstChild) {
        _$todoList.firstChild.remove()
      }
      _render()
      _dispatchUpdateEvent()
      _updateStore()
    }
  }

  const _loadTodoItems = () => {
    const items = localStorage.getItem('todoItems')
    _todoItems = items ? JSON.parse(items) : []
  }

  const _updateStore = () => localStorage.setItem('todoItems', JSON.stringify(_todoItems))

  const _initEventListener = () => {
    _$todoList.addEventListener('click', (event) => {
      const { classList } = event.target
      if (classList.contains('toggle')) _toggleTodoItem(event)
      if (classList.contains('delete')) _removeTodoItem(event)
    })
    const removeAllEvent = new Event('removeAll')
    $removeAllBtn.addEventListener('click', () => $removeAllBtn.dispatchEvent(removeAllEvent))
    $removeAllBtn.addEventListener('removeAll', () => _removeAll())
  }

  const _dispatchUpdateEvent = () => {
    document.getElementById('todo-input').dispatchEvent(new CustomEvent('updateTodoItem', {
      detail: {
        totalCount: _getItemsCount(),
        completedCount: _getCompletedCount(),
      },
    }))
  }

  const _loadTodoCount = () => {
    TodoCount.update(_getItemsCount(), _getCompletedCount())
  }

  const init = () => {
    _loadTodoItems()
    _render()
    _loadTodoCount()
    _initEventListener()
  }

  return {
    init,
    add,
  }
})()

export default TodoList
