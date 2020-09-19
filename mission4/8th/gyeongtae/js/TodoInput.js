export default function TodoInput(renderEle, addTodoList) {
  this.renderEle = renderEle
  this.addTodoList = addTodoList
  this.todoInputEle = document.createElement('form')
  renderEle.append(this.todoInputEle)

  this.render = () => {
    this.todoInputEle.innerHTML = `
    <input type="text" id="input-todo-list" size="20" />
    <button type="submit" id="add-todo-list-button">추가</button>
    `
  }
  this.setState = (nextData) => {
    this.render()
  }

  this.bindEvent = () => {
    // todd list 추가 이벤트 등록
    this.todoInputEle.addEventListener('submit', (event) => {
      event.preventDefault()
      this.addTodoList(event)
    })
  }
  this.render()
  this.bindEvent()
}
