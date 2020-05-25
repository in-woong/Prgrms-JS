import { checkTodos } from '../utils/validation.js'

export default function TodoList(props) {
  if (new.target !== TodoList) {
    throw new Error('Please use \'new\' keyword')
  }
  const { selector, todos, onToggle } = props
  checkTodos(todos)
  this.todos = todos

  this.init = () => {
    const $target = document.querySelector(selector)
    const $box = document.createElement('section')

    this.$completedList = document.createElement('ul')
    $box.appendChild(this.$completedList)

    this.$notCompletedList = document.createElement('ul')
    $box.appendChild(this.$notCompletedList)

    $target.appendChild($box)
    this.bindEvents()
    this.render()
  }

  this.render = () => {
    const completedArray = []
    const notCompletedArray = []
    this.todos.forEach((todo) => {
      const { isCompleted } = todo
      if (isCompleted) {
        completedArray.push(todo)
      } else {
        notCompletedArray.push(todo)
      }
    })
    this.$completedList.innerHTML = completedArray.map(({ _id, content }) => {
      return `<li data-id=${_id}><s>${content}</s><button>삭제</button></li>`
    })
      .join('')
    this.$notCompletedList.innerHTML = notCompletedArray.map(({ _id, content }) => {
      return `<li data-id=${_id}>${content}<button>삭제</button></li>`
    }).join('')
  }

  this.bindEvents = () => {
    const toggleCallback = (e) => {
      const $element = e.target.closest('li')
      if ($element && $element.dataset) {
        const { id } = $element.dataset
        onToggle(id)
      }
    }
    this.$notCompletedList.addEventListener('click', toggleCallback)
    this.$completedList.addEventListener('click', toggleCallback)
  }

  this.setState = (todos) => {
    checkTodos(todos)
    this.todos = todos
    this.render()
  }
  this.init()
}
