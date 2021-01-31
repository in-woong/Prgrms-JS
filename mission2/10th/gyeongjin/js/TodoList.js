import { ERROR_MESSAGE } from './error.js'

class TodoList {
  constructor({ $app, initialState, toggleTodoItem, removeTodoItem }) {
    const $listBox = document.createElement('ul')
    this.$app = $app
    this.$listBox = $listBox
    this.state = initialState
    this.toggleTodoItem = toggleTodoItem
    this.removeTodoItem = removeTodoItem
    this.setState(this.state)

    $app.append($listBox)
    this.handleTodoItem()
  }

  setState = (nextData) => {
    this.state = nextData
    this.validator(this.$app, nextData)
    this.render()
  }

  validator = (app, listData) => {
    if (
      listData === null ||
      listData === undefined ||
      app === null ||
      app === undefined
    ) {
      throw new Error(ERROR_MESSAGE.INVALID)
    }
    if (!Array.isArray(listData)) {
      throw new Error(ERROR_MESSAGE.IS_NOT_ARRAY)
    }
    listData.every((item) => {
      if (this.state.length > 1 && item.text.length < 1) {
        throw new Error(ERROR_MESSAGE.EMPTY_TEXT)
      }
    })
  }

  handleTodoItem = () => {
    this.$listBox.addEventListener('click', (e) => {
      let itemId = e.target.id
      if (e.target.className === 'todo-item') {
        this.toggleTodoItem(itemId)
      } else if (e.target.className === 'delete-btn') {
        this.removeTodoItem(itemId)
      }
    })
  }

  render = () => {
    if (this.state.length === 0) {
      this.$listBox.innerHTML = '<li class="empty-message">해야할 일을 입력해주세요⭐️</li>'
    } else if (this.state.length > 0) {
      this.$listBox.innerHTML = this.state
        .map(({ isCompleted, text }, index) =>
          isCompleted
            ? `<li id="${index}" class="todo-item"><s>${text}</s><button id="${index}" class="delete-btn">x</button></li>`
            : `<li id="${index}" class="todo-item">${text}<button id="${index}" class="delete-btn">x</button></li>`,
        )
        .join('')
    }
  }
}

export { TodoList }
