import { checkCalledByNewKeyword, validateHTMLDOMElement, validateTodos } from '../validate.js'

export default function TodoList({ $target, todos, deleteTodo, toggleCompletion }) {
  checkCalledByNewKeyword($target)
  validateHTMLDOMElement($target)
  validateTodos(todos)
  this.$todoList = $target
  this.todos = todos

  this.$todoList.addEventListener('click', async (e) => {
    const { id, action } = e.target.dataset
    if (!action) return
    await this[action](id)
  })

  this.deleteTodo = async (id) => {
    await deleteTodo(id)
  }

  this.toggleCompletion = async (id) => {
    await toggleCompletion(id)
  }

  this.setState = (newTodos) => {
    try {
      validateTodos(newTodos)
      this.todos = newTodos
      this.render()
    } catch (error) {
      console.error(error)
    }
  }

  this.render = () => {
    this.$todoList.innerHTML = this.todos.map(({ _id, content, isCompleted }) => `<li id=${_id} class=${isCompleted ? 'todo-complete' : 'todo-uncompleted'} data-id=${_id} data-action="toggleCompletion">${content}<button data-action='deleteTodo' data-id=${_id}>삭제</button></li>`).join('')
  }

  this.render()
}
