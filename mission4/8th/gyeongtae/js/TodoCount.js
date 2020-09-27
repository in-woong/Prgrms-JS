export default function TodoCount({ renderEle, data }) {
  this.data = data
  this.renderEle = renderEle
  this.todoCountEle = document.createElement('div')
  renderEle.append(this.todoCountEle)

  this.render = () => {
    const todoCount = this.data.length
    const todoCompletedCount = this.data.filter((element) => {
      return element.isCompleted
    }).length
    this.todoCountEle.innerHTML = `
      <div>
      <div>Todo수 : ${todoCount}개</div>
      <div>완료된 Todo수 : ${todoCompletedCount}개</div>
      </div>
      `
  }
  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }
  this.render()
}
