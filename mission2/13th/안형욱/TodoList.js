class TodoList {
  constructor($target, data, props) {
    this.validate(data)
    this.data = data
    this.props = props
    this.$target = document.createElement('div')
    $target.appendChild(this.$target)
    this.bindEvents()
    this.render()
  }
  validate(data) {
    if (data === null || data === undefined)
      throw new Error('data가 null이거나 undefined 입니다.')
    if (!Array.isArray(data)) throw new Error('data가 배열이 아닙니다.')
    if (!data.every((v) => v.text && v.text.trim()))
      throw new Error('data의 내용(text)이 이상합니다.')
  }
  setState(nextData) {
    this.validate(nextData)
    this.data = nextData
    this.render()
  }
  render() {
    const template = `
      <ul>
        ${this.data
          .map(
            ({ text, isCompleted = false }, idx) =>
              `
                <li data-id="${idx}">
                  <span class="todo-text">${
                    isCompleted ? `<s>${text}</s>` : text
                  }</span>
                  <button class="delete-btn">삭제</button>
                </li>
              `
          )
          .join('')}  
      </ul>
    `
    this.$target.innerHTML = template
  }
  bindEvents() {
    const { toggleTodo, deleteTodo } = this.props
    this.$target.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        const $li = e.target.closest('li')
        const todoIdx = Number($li.dataset.id)
        deleteTodo(todoIdx)
      }
      if (
        e.target.closest('.todo-text') ||
        e.target.classList.contains('todo-text')
      ) {
        const $li = e.target.closest('li')
        const todoIdx = Number($li.dataset.id)
        toggleTodo(todoIdx)
      }
    })
  }
}
