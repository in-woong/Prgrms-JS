import { checkDataType } from './lib/util/error.js'
import { $ } from './lib/util/helper.js'

class TodoList {
  constructor(data, target) {
    checkDataType(data)

    this.data = data
    this.$target = $(target)
    this.$form = $('#todo-form')
    this.$input = $('#todo-input')
    this.render()
    this.setEvent()
  }

  setState(nextData) {
    checkDataType(nextData)
    this.data = nextData
    this.render()
  }

  render() {
    this.$target.innerHTML = `
    ${this.data
      .map((item) =>
        item.isCompleted
          ? `<li data-todo="${item.id}">
              <s>${item.text}</s>
              <button data-todo="${item.id}" type="button">삭제</button>
            </li>`
          : `<li data-todo="${item.id}">
              ${item.text}
              <button data-todo="${item.id}" type="button">삭제</button>
            </li>`
      )
      .join('')}
  `
  }

  setEvent() {
    this.$form.addEventListener('submit', (e) => {
      e.preventDefault()
      this.setState([
        ...this.data,
        {
          id: Math.random().toString(),
          text: this.$input.value,
          isCompleted: false,
        },
      ])
      this.$input.value = null
    })

    this.$target.addEventListener('click', (e) => {
      const todoId = e.target.dataset.todo

      // 할일 목록 중 삭제버튼을 눌렀을 때
      if (e.target.tagName === 'BUTTON') {
        const deletedTodoItem = this.data.filter((item) => item.id !== todoId)
        this.setState(deletedTodoItem)
        return
      }

      const completedTodoItem = this.data.map((item) =>
        item.id === todoId ? { ...item, isCompleted: true } : item
      )
      this.setState(completedTodoItem)
    })
  }
}

export default TodoList
