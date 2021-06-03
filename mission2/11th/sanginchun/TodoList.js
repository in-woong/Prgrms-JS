class TodoList {
  constructor($target, todoItems) {
    this.validateTodoItems(todoItems)

    this.$target = $target
    this.todoItems = todoItems

    this.$target.addEventListener('click', (e) => {
      if(!e.target.closest('.todo-item')) return

      const todoItemIndex = e.target.closest('.todo-item').dataset.index

      // delete
      if (e.target.closest('.delete-btn')) {
        this.deleteTodoItem(todoItemIndex)
        return
      }

      // mark 'isCompleted: true'
      if (e.target.closest('.todo-text')) {
        if(this.todoItems[todoItemIndex].isCompleted) return

        this.markTodoItem(todoItemIndex)
      }
    })

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
        ${this.todoItems.map(({ text, isCompleted }, index) => (`
          <li class='todo-item' data-index='${index}'>
            <span class='todo-text'>${isCompleted ? `<s>${text}</s>` : text}</span>
            <button class='delete-btn'>삭제</button>
          </li>
        `)).join("")}
      </ul>
    `
  }

  addTodoItem(text) {
    this.setState([...this.todoItems, { text, isCompleted: false }])
  }

  deleteTodoItem(index) {
    const nextTodoItems = [...this.todoItems]
    nextTodoItems.splice(index, 1)

    this.setState(nextTodoItems)
  }

  markTodoItem(index) {
    const nextTodoItems = [...this.todoItems]
    nextTodoItems[index].isCompleted = true

    this.setState(nextTodoItems)
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
