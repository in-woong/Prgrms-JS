function TodoList($target, initialState, toggleItem) {
  if (!(this instanceof TodoList)) {
    return new TodoList($target, initialState)
  }

  this.setState = (nextData) => {
    this.validateData(nextData)
    this.todoData = nextData
    this.render()
  }

  this.validateData = (todoData) => {
    if (!todoData) {
      throw new Error('Data is null or undefined')
    }
    if (!Array.isArray(todoData)) {
      throw new Error('Data is not an Array')
    }
    if (todoData.some((item) => !item)) {
      throw new Error('Data is not available')
    }
    if (todoData.some((item) => !item || typeof item.text !== 'string' || typeof item.isCompleted !== 'boolean')) {
      throw new Error('Data format is not supported')
    }
  }

  this.render = () => {
    const dataHTMLString = this.todoData.map((item, index) => '<div id="item">' + (item.isCompleted ? `<s>${item.text}</s>` : item.text) + `<button id="itemBtn" index="${index}">완료</button>` + '</div>').join('')
    $target.innerHTML = dataHTMLString
  }

  this.setState(initialState)

  $target.addEventListener('click', (event) => {
    const clickedItemIndex = parseInt(event.target.getAttribute('index'))
    if (event.target && event.target.nodeName === 'BUTTON') {
      toggleItem(clickedItemIndex)
    }
    event.stopPropagation()
  })
}

export default TodoList
