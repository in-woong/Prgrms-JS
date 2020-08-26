import defaultState from './store/defaultStore.js'
import TodoList from './components/TodoList/TodoList.js'
;(function (state) {
  const { todos, todos2, todos3 } = state
  document.addEventListener('DOMContentLoaded', () => {
    const todoList = new TodoList({ element: '#todo-list', todos })
    const todoList2 = new TodoList({ element: '#todo-list-2', todos: todos2 })
    const todoList3 = new TodoList({ element: '#todo-list-3', todos: todos3 })
  })
})(defaultState)
