function TodoList($target, data, updateCounter) {
  this.$target = $target
  this.data = data
  this.updateCounter = updateCounter

  this.render = function () {
    this.$target.innerHTML = this.data.map((todo, index) => this.convertToHTML(todo, index)).join('')
  }
  this.convertToHTML = function (todo, index) {
    if (todo.isCompleted) {
      return `<li class="todo" data-index=${index}>
      <s><span class="todoText">${todo.text}</span></s>
      <button class="delete">삭제</button>
    </li>`
    } else {
      return `<li class="todo" data-index=${index}>
          <span class="todoText">${todo.text}</span>
          <button class="delete">삭제</button>
        </li>`
    }
  }

  this.setState = function (nextData) {
    this.data = nextData
    this.updateCounter(nextData)
    localStorage.setItem('data', JSON.stringify(nextData))
    this.render()
  }

  this.$target.addEventListener('click', (e) => {
    if (e.target.className === 'todoText') {
      const index = Number(e.target.closest('.todo').dataset.index)
      const newData = [...this.data]
      newData[index].isCompleted = true
      this.setState(newData)
    }

    if (e.target.className === 'delete') {
      const index = Number(e.target.closest('.todo').dataset.index)
      const newData = this.data.filter((todo, todoIndex) => todoIndex !== index)
      this.setState(newData)
    }
  })

  this.render()
}
