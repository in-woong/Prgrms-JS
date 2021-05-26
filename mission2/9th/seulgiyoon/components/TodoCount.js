export default class TodoCount {
  constructor(targetEl, data) {
    this.el = document.getElementById(targetEl)
    this.data = data
    this.render()
  }

  render() {
    this.el.innerHTML = 
      `<p>할 일 갯수 : ${this.data.length} |
        완료한 일 갯수 : ${this.data.filter((item) => item.isCompleted === true).length}</p>`
  }

  setState(newData) {
    this.data = newData
    this.render()
  }
}
