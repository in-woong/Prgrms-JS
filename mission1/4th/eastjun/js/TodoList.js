class TodoList {
  constructor(todoItems, elementId) {
    TodoListValidator.isValid(this, TodoList, todoItems)
    this._todoItems = todoItems
    this._elementId = elementId
  }

  get todoItems() {
    return this._todoItems
  }

  set todoItems(todoItems) {
    this._todoItems = todoItems
  }

  get elementId() {
    return this._elementId
  }

  render() {
    const todoTemplate = this.todoItems.map(item => this.todoItemTemplate(item))
    document.getElementById(this.elementId).innerHTML = todoTemplate.join('')
  }

  setState(nextData) {
    TodoListValidator.isValid(this, TodoList, nextData)
    this.todoItems = nextData
    this.render()
  }

  todoItemTemplate(item) {
    return `
            <div class="${item.isCompleted ? 'completed' : ''}">
                ${item.text}
            </div>
           `
  }
}
