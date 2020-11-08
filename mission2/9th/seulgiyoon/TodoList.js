export class TodoList {
  constructor(targetEl, data) {
    this.checkDataValid(data)
    this.data = data
    this.el = document.getElementById(targetEl).querySelector('ul')
    this.formEl = document.querySelector('form')
    this.inputEl = document.querySelector('input')
    this.render()
  }

  checkDataValid(data) {
    if (!Array.isArray(data)) throw Error('데이터가 배열이 아닙니다.')

    data.forEach((item) => {
      if (Object.prototype.toString.call(item) !== '[object Object]')
        throw Error('데이터 요소가 객체가 아닙니다.')
      if (!item.hasOwnProperty('text')) throw Error('text값이 없습니다.')
      if (!item.hasOwnProperty('isCompleted'))
        throw Error('isCompleted값이 없습니다.')
    })
  }

  addEvent() {
    this.formEl.addEventListener('submit', (e) => {
      e.preventDefault()
      if (this.inputEl.value !== '') {
        this.addNewItem(this.inputEl.value)
        this.inputEl.value = ''
        this.inputEl.focus()
      }
    })
  }

  addNewItem(value) {
    this.data = [{ text: value, isCompleted: false }, ...this.data]
    this.render()
  }

  removeItem(tartgetText) {
    this.data = this.data.filter((item) => item.text !== tartgetText)
    this.render()
  }

  completeItem(targetText) {
    this.data = this.data.map((item) =>
      item.text === targetText
        ? { ...item, isCompleted: !item.isCompleted }
        : item
    )
    this.render()
  }

  createElement({ element, innerText = '', event }) {
    const newElement = document.createElement(element)
    newElement.innerHTML = innerText
    if (event) newElement.addEventListener(...event)

    return newElement
  }

  renderItem(data) {
    const todoText = this.createElement({
      element: 'p',
      innerText: data.isCompleted ? `<s>${data.text}</s>` : data.text,
      event: [
        'click',
        () => {
          this.completeItem(data.text)
        },
      ],
    })
    const removeBtn = this.createElement({
      element: 'button',
      innerText: 'X',
      event: [
        'click',
        () => {
          this.removeItem(data.text)
        },
      ],
    })

    const newItem = this.createElement({ element: 'li' })
    newItem.append(todoText, removeBtn)

    return newItem
  }

  render() {
    this.el.innerHTML = ''
    this.data.forEach((item) => {
      this.el.appendChild(this.renderItem(item))
    })
    this.addEvent()
  }

  setState(nextData) {
    this.checkDataValid(nextData)
    this.data = nextData
    this.render()
  }
}
