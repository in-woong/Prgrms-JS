// function style TodoList 컴포넌트
export default function TodoList(renderEle, data) {
  this.data = data
  this.renderEle = renderEle
  this.todoListEle = document.createElement('div')
  renderEle.append(this.todoListEle)

  // data값에 따라 todo-list를 동적으로 렌더링한다
  this.render = () => {
    let html = ''
    this.data.map((data, index) => {
      html += `<div key=${index}>${
        data.isCompleted
          ? `<s class="todo-list-item">${data.text}</s>`
          : `<span class="todo-list-item">${data.text}</span>`
      }
      <button class="todo-list-remove-button">삭제</button></div>`
    })
    this.todoListEle.innerHTML = html
  }
  // data값을 바꾸고 컴포넌트를 다시 렌더링한다
  this.setState = (nextData) => {
    // TodoList data체크
    todoListDataCheck(nextData)
    this.data = nextData
    this.render()
  }
  this.render()
}
