export default function TodoList({
  $target,
  initialData,
  onTodoClick,
  onTodoRemove,
}) {
  this.$target = $target
  this.state = initialData
  this.$todolist = document.createElement('ul')
  $target.appendChild(this.$todolist)

  this.$todolist.addEventListener('click', (e) => {
    const $list = e.target.closest('li')
    const index = parseInt($list.dataset.index)

    if (e.target.tagName == 'BUTTON') {
      onTodoRemove(index)
    } else {
      onTodoClick(index)
    }
    this.render()
  })

  this.render = () => {
    this.$todolist.innerHTML = this.state
      .map((item, index) => {
        return `<li data-index=${index}> ${
          item.isCompleted ? `<s>${item.text}</s>` : item.text
        }<button>X</button></li>`
      })
      .join('')
  }

  this.setState = (newData) => {
    this.state = newData
    console.log(this.state)
    this.render()
  }
  this.render()
}
