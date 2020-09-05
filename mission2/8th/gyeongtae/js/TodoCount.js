export default function TodoCount(renderElement, data) {
  this.todoCount = data.length
  this.todoCompletedCount = 0
  this.renderElement = document.querySelector(renderElement)

  data.forEach((element) => {
    if (element.isCompleted) {
      this.todoCompletedCount++
    }
  })

  this.render = () => {
    this.renderElement.innerHTML = `
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
