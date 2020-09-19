export default function TodoRemoveAllButton(renderEle) {
  this.renderEle = renderEle
  this.todoRemoveAllEle = document.createElement('div')
  renderEle.append(this.todoRemoveAllEle)

  this.render = () => {
    this.todoRemoveAllEle.innerHTML = `
    <button id = "todo-remove-all-button">Todo전체 삭제</button>
    `
  }
  this.render()
}
