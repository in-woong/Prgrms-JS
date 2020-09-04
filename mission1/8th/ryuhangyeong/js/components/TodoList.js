class TodoList {
  $target = null
  $todoList = null
  data = null

  constructor({ $target, initialData }) {
    this.$target = $target
    this.data = initialData

    this.$todoList = document.createElement('ul')
    this.$target.appendChild(this.$todoList)

    this.render()
  }

  setState(nextData) {
    this.data = nextData
    this.render()
  }

  render() {
    if (!this.data || !this.data.length) return

    this.$todoList.innerHTML = this.data
      .map(
        (t) => `<li>
			${t.isCompleted ? `<s>${t.text}</s>` : t.text}
		</li>`
      )
      .join('')
  }
}
