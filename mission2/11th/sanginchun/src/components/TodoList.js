class TodoList {
  constructor({ $parent, todoItems, onDeleteBtnClick, onTodoTextClick }) {
    this.$target = document.createElement('ul')
    this.$target.setAttribute('data-component-type', 'TodoList')

    this.$target.addEventListener('click', (e) => {
      if(!e.target.closest('.todo-item')) return

      const todoItemIndex = +e.target.closest('.todo-item').dataset.index

      // delete
      if (e.target.closest('.delete-btn')) {
        onDeleteBtnClick(todoItemIndex)
        return
      }

      // mark 'isCompleted: true'
      if (e.target.closest('.todo-text')) {
        if(this.todoItems[todoItemIndex].isCompleted) return

        onTodoTextClick(todoItemIndex)
        return
      }
    })

    this.todoItems = todoItems
    
    this.render()
    $parent.appendChild(this.$target)
  }

  setState(nextTodoItems) {
    this.todoItems = nextTodoItems
    this.render()
  }

  render() {
    this.$target.innerHTML = `
      ${this.todoItems.map(({ text, isCompleted }, index) => (`
        <li class='todo-item' data-index='${index}'>
          <span class='todo-text'>${isCompleted ? `<s>${text}</s>` : text}</span>
          <button class='delete-btn'>삭제</button>
        </li>
      `)).join("")}
    `
  }
}

export default TodoList
