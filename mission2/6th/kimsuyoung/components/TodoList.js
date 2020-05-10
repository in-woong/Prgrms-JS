class TodoList {
  constructor(props) {
    this.data = props.data
    this.$todoList = document.querySelector(props.selector)
    this.onDeleteTodoList = props.onDeleteTodoList
    this.onToggleCompleted = props.onToggleCompleted
    this.onDeleteAllTodoList = props.onDeleteAllTodoList

    this.$todoList.addEventListener('click', (e) => {
      if (e.target.className === 'delete-btn') {
        this.onDeleteTodoList(e.target.value)
      } else if (e.target.dataset.id) {
        this.onToggleCompleted(e.target.dataset.id)
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
          `<li data-id=${data.id}>
            ${
              data.isCompleted
                ? `<s data-id=${data.id}>${data.text}(완료)</s>`
                : data.text
            }<button class="delete-btn" value=${data.id}>삭제</button></li>`
      )
      .join('')}</ul>`
  }
}

export default TodoList
