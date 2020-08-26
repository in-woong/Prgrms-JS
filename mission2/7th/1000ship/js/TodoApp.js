import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'

function TodoApp(
  todoStorageKey,
  { $containerEl, $listEl, $inputEl, $submitEl, $countEl, $clearEl }
) {
  if (!(this instanceof TodoApp))
    throw new Error("TodoList can't be called by function")

  if (!localStorage.getItem(todoStorageKey))
    localStorage.setItem(todoStorageKey, '[]')

  const removeAllEvent = new CustomEvent('removeAll', {
    bubbles: true,
  })

  try {
    this.todos = JSON.parse(localStorage.getItem(todoStorageKey))
  } catch (e) {
    this.todos = []
  }
  this.todoList = new TodoList(this, $listEl)
  this.todoInput = new TodoInput(this, $inputEl, $submitEl)
  this.todoCount = new TodoCount(this, $countEl)

  this.save = () => {
    try {
      localStorage.setItem(todoStorageKey, JSON.stringify(this.todos))
    } catch (e) {
      console.log(`There's error on saving todo-data, (${e})`)
    }
  }

  this.render = function () {
    this.todoList.render()
    this.todoCount.render()
  }

  this.setState = function (nextTodo) {
    this.todos = nextTodo
    this.save()
    this.render()
  }

  this.render()

  // Custom Event 부분 해결
  this.$containerEl = $containerEl
  this.$clearEl = $clearEl

  this.$clearEl.addEventListener('click', () => {
    this.$containerEl.dispatchEvent(removeAllEvent)
  })
  this.$containerEl.addEventListener('removeAll', (e) => {
    this.todos = []
    this.setState(this.todos)
  })
}

export default TodoApp
