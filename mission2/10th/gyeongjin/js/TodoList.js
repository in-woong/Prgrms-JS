import { ERROR_MESSAGE } from './error.js'

class TodoList {
  constructor({ $app, initialState, toggleTodoItem, removeTodoItem }) {
    this.validatorData(initialState)
    this.validatorApp($app)
    const $listBox = document.createElement('ul')
    this.$listBox = $listBox
    this.state = initialState
    this.toggleTodoItem = toggleTodoItem
    this.removeTodoItem = removeTodoItem
    // review5 : 불필요한 setState(this.state) 제거
    this.render()

    $app.append($listBox)
    this.handleTodoItem()
  }

  setState = (nextData) => {
    // review6 : 검증 위치 고려 (app의 검증 위치 변경 및 initialState 검증 추가 )
    this.validatorData(nextData)
    this.state = nextData
    this.render()
  }

  validatorApp = (app) => {
    if (app === null || app === undefined) {
      throw new Error(ERROR_MESSAGE.INVALID)
    }
  }

  validatorData = (listData) => {
    if (listData === null || listData === undefined) {
      throw new Error(ERROR_MESSAGE.INVALID)
    }
    if (!Array.isArray(listData)) {
      throw new Error(ERROR_MESSAGE.IS_NOT_ARRAY)
    }
    // review10 : 두 property 타입 검사 추가
    listData.every((item) => {
      if (listData.length > 0 && item.text.length < 1) {
        throw new Error(ERROR_MESSAGE.EMPTY_TEXT)
      } else if (typeof item.text !== 'string') {
        throw new Error(ERROR_MESSAGE.IS_NOT_STRING)
      }
    })
  }

  handleTodoItem = () => {
    // review11 :  let -> const
    this.$listBox.addEventListener('click', (e) => {
      const itemId = e.target.id
      if (e.target.className === 'todo-item') {
        this.toggleTodoItem(itemId)
      } else if (e.target.className === 'delete-btn') {
        this.removeTodoItem()
      }
    })
  }

  render = () => {
    // review7 : if (this.state.length > 0) 제거, 이미 validator에서 array 검증
    if (this.state.length === 0) {
      this.$listBox.innerHTML =
        '<li class="empty-message">해야할 일을 입력해주세요⭐️</li>'
    } else {
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
