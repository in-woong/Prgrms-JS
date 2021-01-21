export default class TodoCount {
  constructor({ targetEl, initialState }) {
    this.el = document.getElementById(targetEl)
    this.state = {
      todoList: initialState,
    }
    this.render()
  }

  render() {
    this.el.innerHTML = `<p>할 일 갯수 : ${this.state.todoList.length} |
        완료한 일 갯수 : ${
          this.state.todoList.filter((item) => item.isCompleted === true).length
        }</p>`
  }

  setState(newData) {
    this.state.todoList = newData
    this.render()
  }
}
