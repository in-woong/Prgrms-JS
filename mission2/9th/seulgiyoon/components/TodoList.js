import {
  isArray,
  isPlainObject,
  hasKey,
  hasRightType,
} from '../util/validation.js'

export default class TodoList {
  constructor(targetEl, data) {
    this.checkDataValid(data)
    this.data = data
    this.el = document.getElementById(targetEl).querySelector('ul')
    this.render()
  }

  checkDataValid(data) {
    isArray(data)
    data.forEach((item) => {
      isPlainObject(item)
      hasKey(item)
      hasRightType(item)
    })
  }

  addClickEvent(callback1, callback2) {
    this.el.addEventListener('click', (e) => {
      if (e.target.className === 'close_btn') {
        callback1(text)
      } else if (e.target.className === 'text' || 'text_complete') {
        callback2(text)
      }
    })
  }

  render() {
    const dataListString = this.data
      .map(
        (item) =>
          `<li data-text=${item.text.replaceAll(' ', '')}>
            <p class="text${item.isCompleted ? '_complete' : ''}">
              ${item.text}
            </p>
            <button class="close_btn">X</button>
          </li>`
      )
      .join('')
    this.el.innerHTML = dataListString
  }

  setState(nextData) {
    this.checkDataValid(nextData)
    this.data = nextData
    this.render()
  }
}
