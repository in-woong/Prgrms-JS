import {
  isArray,
  isPlainObject,
  hasKey,
  hasRightType,
} from '../util/validation.js'

export default class TodoList {
  constructor({
    targetEl,
    initialState,
    username,
    onClickEvents: { removeItem, completeItem },
  }) {
    this.checkDataValid(initialState)
    this.state = {
      todoList: initialState,
      username: username,
    }
    this.el = document.getElementById(targetEl)
    this.onClickEvents = {
      removeItem,
      completeItem,
    }
    this.render()
    this.addClickEvent()
  }

  checkDataValid(data) {
    isArray(data)
    data.forEach((item) => {
      isPlainObject(item)
      hasKey(item)
      hasRightType(item)
    })
  }

  addClickEvent() {
    this.el.querySelector('ul').addEventListener('click', (e) => {
      const id = e.target.parentNode.dataset.id
      if (e.target.className === 'close_btn') {
        this.onClickEvents.removeItem(id)
      } else if (e.target.className === 'text' || 'text_complete') {
        this.onClickEvents.completeItem(id)
      }
    })
  }

  render() {
    const dataListString = this.state.todoList
      .map(
        (item) =>
          `<li data-id=${item._id}>
            <p class="text${item.isCompleted ? '_complete' : ''}">
              ${item.content}
            </p>
            <button class="close_btn">X</button>
          </li>`
      )
      .join('')
    this.el.innerHTML =
      `<h2>${this.state.username}의 할일 목록</h2>` +
      `<ul>${dataListString}</ul>`
  }

  setState(nextData, username) {
    this.checkDataValid(nextData)
    this.state.todoList = nextData
    this.state.username = username
    this.render()
    this.addClickEvent()
  }
}
