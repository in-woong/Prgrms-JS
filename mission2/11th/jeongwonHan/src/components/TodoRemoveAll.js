function TodoDeleteAll({ $app, state, onRemoveAll }) {
  this.$target = document.createElement("button")
  this.$target.setAttribute("data-component-type", "TodoDeleteAll")
  this.$target.innerText = "모두 삭제"
  $app.appendChild(this.$target)
  this.state = state
  this.onRemoveAll = onRemoveAll
  this.removeAllEvent = new Event("removeAll")

  this.removeButtonHandler = () => {
    const removeConfirm = confirm("정말 모두 삭제하시겠습니까?")
    if (removeConfirm) this.onRemoveAll()
  }

  this.$target.addEventListener("click", () => {
    this.$target.dispatchEvent(this.removeAllEvent)
  })
  this.$target.addEventListener("removeAll", () => this.removeButtonHandler())
}
export default TodoDeleteAll
