class TodoCount {
  $target = null
  $todoCount = null
  data = null

  constructor({ $target, initialData }) {
    this.$target = $target
    this.data = initialData

    this.$todoCount = document.createElement('div')
    this.$target.appendChild(this.$todoCount)

    this.render()
  }

  setState(nextData) {
    this.data = nextData
    this.render()
  }

  render() {
    this.$todoCount.innerHTML = `
      <p>총 Todo의 갯수 : ${this.data.length}</p>
      <p>완료처리된 Todo의 갯수${
        this.data.filter((t) => t.isCompleted).length
      }</p>
    `
  }
}
