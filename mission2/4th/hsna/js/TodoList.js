class TodoList {
  constructor(targetId, todoData, onTodoClick, onRemoveClick) {
    this.todoData = todoData
    this.targetId = targetId
    this.onTodoClick = onTodoClick
    this.onRemoveClick = onRemoveClick
    const validator = new TodoListValidator()
    validator.validate(this)

    this.$targetId = document.querySelector(`#${this.targetId}`)
    this.$targetId.addEventListener('click', (e) => {
      const { className, dataset } = e.target
      const { index } = dataset

      if (className.includes('card-content')) {
        onTodoClick(index)
      } else if(className === 'del-btn') {
        onRemoveClick(index)
      }
    })

    this.render()
  }

  render() {
    const addedHTMLText = this.todoData.map((element, index) =>
      this.convertTodoDataIntoHtmlText(element, index)
    )
    this.$targetId.innerHTML = '<ul>' + addedHTMLText.join('') + '</ul>'
  }

  setState(nextData) {
    this.todoData = nextData
    this.render()
  }

  convertTodoDataIntoHtmlText(todoData, index) {
    const completedText = `<li class="card-default card-content" data-index="${index}"><del>${todoData.text}</del><button class="del-btn" data-index="${index}">❌</button></li>`
    const notCompletedText = `<li class="card-default card-content" data-index="${index}">${todoData.text}<button class="del-btn" data-index="${index}">❌</button></li>`
    return todoData.isCompleted ? completedText : notCompletedText
  }
}
