export default function TodoRemoveAllButton(renderEle, dispatchReoveAllEvent) {
  this.renderEle = renderEle
  this.todoRemoveAllEle = document.createElement('div')
  renderEle.append(this.todoRemoveAllEle)
  this.dispatchReoveAllEvent = dispatchReoveAllEvent

  this.render = () => {
    this.todoRemoveAllEle.innerHTML = `
    <button id = "todo-remove-all-button">Todo전체 삭제</button>
    `
  }
  this.bindEvent = () => {
    // removeAll Event를 커스텀으로 만들어
    // todo-remove-all-button을 클릭시 removeAll 이벤트를 todoListElement에 전달
    removeAllButtonEle.addEventListener('click', (event) => {
      this.dispatchReoveAllEvent()
    })
  }
  this.render()
  this.bindEvent()
}
