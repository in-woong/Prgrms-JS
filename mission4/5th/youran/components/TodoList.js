function TodoList(data, $target, { onToggleTodo, onRemoveTodo }) {
  this.data = data
  this.$target = $target
  this.onToggleTodo = onToggleTodo
  this.onRemoveTodo = onRemoveTodo

  $target.addEventListener('click', event => this.handleEvent(event))

  this.handleEvent = () => {
    // 보일러플레이트 코드에서 수정
    const li = event.target.closest('li')
    if (!li) return

    if (event.target.className === 'remove-button') {
      event.stopPropagation()
      onRemoveTodo(li.dataset.id)
    } else {
      event.stopPropagation()
      onToggleTodo(li.dataset.id)
    }
  }

  this.setState = nextData => {
    this.validate(nextData)
    this.data = nextData
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = this.generateHTMLString()
  }

  this.validate = data => {
    if (!Array.isArray(data)) {
      throw new Error('데이터 형식이 올바르지 않습니다.')
    }
  }

  this.generateHTMLString = () => {
    this.validate(this.data)
    if (this.data.length < 1) {
      return '<p>할 일이 없어요.</p>'
    }

    const htmlString = this.data
      .map(
        ({ _id, isCompleted, content }) => `<li data-id="${_id}">
      ${isCompleted ? `<s>${content}</s>` : `${content}`}
      <button class="remove-button">X</button>`
      )
      .join('')

    return `<ul>${htmlString}</ul>`
  }

  this.render()
}

export default TodoList
