import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'

const todoList = new TodoList({ target: document.getElementById('todo-list') })

new TodoInput({
  target: document.getElementById('input-todo'),
  addTodo: (todo) => {
    todoList.setState([...todoList.state, todo])
  },
})
