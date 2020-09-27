export default function TodoInput({ renderEle, addTodoList }) {
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
      const todoListInputEle = event.target.firstElementChild
      // input값이 없으면 return
      if (todoListInputEle.value.length === 0) {
        return alert('내용을 입력해주세요.')
      }
      const content = todoListInputEle.value
      this.addTodoList(content)
      // input값 초기화 및 input에 값 바로 입력할 수 있도록 함
      todoListInputEle.value = ''
      todoListInputEle.focus()
    })
  }
  this.render()
  this.bindEvent()
}
