class TodoList {
  constructor($target, todoItems) {
    this.validateTodoItems(todoItems)

    this.$target = $target
    this.todoItems = todoItems

    this.render()
  }

  setState(nextTodoItems) {
    this.validateTodoItems(nextTodoItems)

    this.todoItems = nextTodoItems
    this.render()
  }

  render() {
    this.$target.innerHTML = `
      <ul>
        ${this.todoItems.map(({ text, isCompleted }) => (
          `<li>${isCompleted ? `<s>${text}</s>` : text}</li>`
        )).join("")}
      </ul>
    `
  }

  validateTodoItems(todoItems) {
    if(!Array.isArray(todoItems)) throw new Error(`${JSON.stringify(todoItems)} is not an Array`)

    todoItems.forEach(item => {
      if(item === null || typeof item !== "object") throw new Error(`data includes item '${item}'`)

      // properties
      if(!item.hasOwnProperty("text") || !item.hasOwnProperty("isCompleted"))
        throw new Error(`${JSON.stringify(item)} should have property 'text' and 'isCompleted'`)
        
      if(typeof item.text !== "string") throw new Error(`'text' in ${JSON.stringify(item)} is not string`)
      if(typeof item.isCompleted !== "boolean") throw new Error(`'isCompleted' in ${JSON.stringify(item)} is not boolean`)
    })
  }
}

export default TodoList
