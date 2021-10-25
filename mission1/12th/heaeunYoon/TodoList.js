function createError({ type }) {
  const errorMessages = {
    array: '파라미터가 배열이 아닙니다',
    text: 'text의 타입이 string이 아닙니다',
  }

  throw new Error(errorMessages[type])
}

class TodoList {
  constructor({ selector, data }) {
    this.data = data
    this.selector = selector

    this.render()
  }

  setState(data) {
    this.data = data

    this.render()
  }

  checkParameter(data) {
    if (!Array.isArray(data)) {
      createError({ type: 'array' })
    }
  }

  checkTextType(text) {
    if (typeof text !== 'string') {
      createError({ type: 'text' })
    }
  }

  render() {
    const { selector, data } = this

    this.checkParameter(data)

    document.querySelector(selector).innerHTML = data
      .map(({ text, isCompleted }) => {
        this.checkTextType(text)

        return `<li>${isCompleted ? `<s>${text}</s>` : `${text}`}</li>`
      })
      .join('')
  }
}

export default TodoList
