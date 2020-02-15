function TodoList($target, data) {
  this.$target = $target
  this.data = data.map((d, index) => ({
    ...d,
    index,
  }))

  this.render = function() {
    this.$target.innerHTML = this.data
      .map(
        todo =>
          `<div> ${todo.isCompleted ? '<s>' : ''}
          <span class="todoItem" id="todo-item-${todo.index}">  ${todo.text} 
          </span> ${todo.isCompleted ? '</s>' : ''} 
          <button class="removeBtn" id="todo-remove-${todo.index}">삭제</button>
          </div>
          `
      )
      .join('')

    document.querySelectorAll('.todoItem').forEach(item => {
      item.addEventListener('click', e => {
        const dataIndex = Number(e.target.id.split('-')[2])
        this.data[dataIndex].isCompleted = !this.data[dataIndex].isCompleted
        this.render()
      })
    })
    document.querySelectorAll('.removeBtn').forEach(btn => {
      btn.addEventListener('click', e => {
        const dataIndex = Number(e.target.id.split('-')[2])
        this.removeItem(dataIndex)
      })
    })
  }

  this.setState = function(nextData) {
    this.data = nextData
    this.render()
  }

  this.addItem = function(text) {
    const nextState = [
      ...this.data,
      {
        text,
        index: this.data.length,
        isCompleted: false,
      },
    ]
    this.setState(nextState)
  }
  this.removeItem = function(index) {
    const nextState = this.data
      .filter(d => d.index !== index)
      .map((d, index) => ({
        ...d,
        index,
      }))
    this.setState(nextState)
  }
  this.render()
}
