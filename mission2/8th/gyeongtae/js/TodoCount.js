export default function TodoCount(renderEle, data) {
  this.renderEle = renderEle
  this.todoCountEle = document.createElement('div')
  renderEle.append(this.todoCountEle)

  this.render = () => {
    this.todoCount = data.length
    this.todoCompletedCount = 0

    data.forEach((element) => {
      if (element.isCompleted) {
        this.todoCompletedCount++
      }
    })

    this.todoCountEle.innerHTML = `
      <div>
      <div>Todo수 : ${this.todoCount}개</div>
      <div>완료된 Todo수 : ${this.todoCompletedCount}개</div>
      </div>
      `
  }
  this.setState = (nextData) => {
    this.todoCount = nextData.length
    this.todoCompletedCount = 0
    nextData.forEach((element) => {
      if (element.isCompleted) {
        this.todoCompletedCount++
      }
    })
    this.render()
  }
  this.render()
}
