export default function TodoList({
  $target,
  initialState,
  onTodoClick,
  onTodoRemove,
}) {
  // initialState에 대한 검증

  this.$todoList = document.createElement('ul')

  $target.appendChild(this.$todoList)

  this.state = initialState

  this.render = function () {
    if (Array.isArray(this.state)) {
      this.$todoList.innerHTML = this.state
        .map(
          ({ text, isCompleted }, index) =>
            `<li data-index="${index}">${
              isCompleted ? `<s>${text}</s>` : text
            } <button>x</button></li>`
        )
        .join('')
    }
  }

  this.setState = (nextState) => {
    // nextState에 대한 검증
    this.state = nextState
    this.render()
  }

  this.$todoList.addEventListener('click', (e) => {
    const $li = e.target.closest('li')
    const index = Number($li.dataset.index)

    if (e.target.tagName === 'LI') {
      onTodoClick(index)
    } else if (e.target.tagName === 'BUTTON') {
      onTodoRemove(index)
    }
  })

  this.render()
}
