export default function TodoCount(renderEle, data) {
  this.data = data
  this.renderEle = renderEle
  this.todoCountEle = document.createElement('div')
  renderEle.append(this.todoCountEle)

  this.setTodoCount = (data) => {
    this.todoCount = data.length
    this.todoCompletedCount = data.filter((element) => {
      return element.isCompleted
    }).length
  }

  this.render = () => {
    this.setTodoCount(this.data)
    this.todoCountEle.innerHTML = `
      <div>
      <div>Todo수 : ${this.todoCount}개</div>
      <div>완료된 Todo수 : ${this.todoCompletedCount}개</div>
      </div>
      `
  }
  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }
  this.render()
}
