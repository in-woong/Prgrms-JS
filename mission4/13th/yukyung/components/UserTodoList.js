class UserTodoList {
  constructor({ $target }) {
    this.$target = $target
    this.state = {
      userName: '',
      todoList: [],
    }
    this.render()
  }

  setState(nextData) {
    this.state = nextData
    this.render()
  }

  render() {
    const htmlString = this.state.todoList.map(
      (todo) => `<li>${todo.content}</li>`
    )

    this.$target.innerHTML = `
      ${
        this.state.userName &&
        `<p>
          <strong>${this.state.userName}</strong>의 투두리스트
        </p>`
      }
      <ul>${htmlString.join('')}</ul>`
  }
}

export default UserTodoList
