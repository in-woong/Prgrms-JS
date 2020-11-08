export default class TodoList {
  constructor(targetEl, data) {
    this.checkDataValid(data)
    this.data = data
    this.el = document.getElementById(targetEl).querySelector('ul')
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
