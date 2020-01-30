class TodoList {
  constructor(todoListId, todoAPI) {
    this.todoData = []
    this.todoAPI = todoAPI
    this.$todoList = document.querySelector(todoListId)

    this.$todoList.addEventListener('click', this.onClick.bind(this), false)
  }

  setState(todos, username) {
    this.todoData = todos
    this.render()
  }

  render() {
    const buildHtml = (todo) => `<div data-id=${todo._id}>
                <span data-cmd=del-${todo._id} ${todo.isCompleted ? 'class=done' : ''}>
                  ${todo.content}</span>
                <button data-cmd=done-${todo._id}>done</button>
              </div>`

    this.$todoList.innerHTML = this.todoData.map(buildHtml).join('')
  }

  onClick(e) {
    const action = e.target.dataset.cmd || '-'
    const [cmd, idx] = action.split('-') //  #78 PR 을 참조했습니다.

    switch (cmd) {
      case 'done': this.todoAPI.doneItem(idx); break
      case 'del': this.todoAPI.removeItem(idx); break
    }
  }
  
}

export default TodoList
