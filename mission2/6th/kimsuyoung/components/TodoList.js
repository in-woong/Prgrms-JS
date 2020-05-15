class TodoList {
  constructor(props) {
    this.data = props.data
    this.$todoList = props.selector
    this.onDeleteTodoList = props.onDeleteTodoList
    this.onToggleCompleted = props.onToggleCompleted
    this.onDeleteAllTodoList = props.onDeleteAllTodoList

    this.$todoList.addEventListener('click', (e) => {
      const { target } = e

      if (target.className === 'delete-btn') {
        const { id } = target.closest('.todo-item').dataset
        this.onDeleteTodoList(id)
      } else if (target.className === 'todo-item') {
        const { id } = target.dataset
        this.onToggleCompleted(id)
      }
    })
  }

  setState(nextData) {
    this.data = nextData
    this.render()
  }

  render() {
    //this.validate(data)
    this.$todoList.innerHTML = `<ul>${this.data
      .map(
        (data) =>
          `<li data-id=${data.id} class="todo-item">
            ${
              data.isCompleted
                ? `<s data-id=${data.id}>${data.text}(완료)</s>`
                : data.text
            }<button class="delete-btn">삭제</button></li>`
      )
      .join('')}</ul>`
  }
}

export default TodoList
