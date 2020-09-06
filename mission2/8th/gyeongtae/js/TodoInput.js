export default function TodoInput(renderEle) {
  this.renderEle = renderEle
  this.todoInputEle = document.createElement('form')
  renderEle.append(this.todoInputEle)

  this.render = () => {
    this.todoInputEle.innerHTML = `
    <input type="text" id="input-todo-list" size="20" />
    <button type="submit" id="add-todo-list-button">추가</button>
    `
  }
  this.render()
}
