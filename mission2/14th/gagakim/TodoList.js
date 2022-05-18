function TodoList($target, data, onButtonClick) {

  this.$target = $target
  this.$todoList = document.createElement('ul')
  $target.appendChild(this.$todoList)
  this.data = data

  this.$todoList.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
      const itemIdx = parseInt(event.target.closest('button').dataset.idx)
      onButtonClick(itemIdx)
    }
    this.render()
  })

  this.setState = (newData) => {
    this.data = newData
    this.render()
  }

  this.render = () => {
    this.$todoList.innerHTML = this.data
      .map(({text, isCompleted}) => `${isCompleted ? `<s>${text}</s>` : text}`)
      .map((item, index) => `<li>${item}<button data-idx="${index}">완료</button></li>`)
      .join('')
  }

  this.render()
}
