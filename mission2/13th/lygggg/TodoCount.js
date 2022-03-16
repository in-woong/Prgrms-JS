export default function TodoCount(todoCount, todos) {
  this.$todoCount = todoCount
  this.$todos = todos

  this.render = function () {
    const template = `
        <div>todo갯수${this.$todos.length}, 완료todo갯수${
      this.$todos.filter((e) => e.isCompleted === true).length
    }</div>
        `
    this.$todoCount.innerHTML = template
  }
  this.render()
}
