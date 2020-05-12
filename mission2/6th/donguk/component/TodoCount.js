function TodoCount(props) {
  if (!(this instanceof TodoCount)) throw new Error('new 연산자를 사용해주세요.')
  const { todos, selector } = props
  checkSelector(selector)
  checkData(todos)
  this.$target = document.querySelector(selector)
  this.data = todos
  this.render = () => {
    this.$target.innerHTML = `
      <div>완료: ${this.data.filter((element) => element.isCompleted).length}/${this.data.length}</div>
    `
  }
  this.setState = (newData) => {
    checkData(newData)
    this.data = newData
    this.render()
  }
  this.render()
}
