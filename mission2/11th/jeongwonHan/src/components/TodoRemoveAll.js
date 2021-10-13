function TodoDeleteAll({ $target, state, onRemoveAll }) {
  this.$target = $target
  this.$todoDeleteButton = document.createElement("button")
  this.$todoDeleteButton.setAttribute("data-component-type", "TodoDeleteAll")
  this.$todoDeleteButton.innerText = "모두 삭제"
  this.$target.appendChild(this.$todoDeleteButton)
  this.state = state
  this.onRemoveAll = onRemoveAll
  this.removeAllEvent = new Event("removeAll")

  this.removeButtonHandler = () => {
    const removeConfirm = confirm("정말 모두 삭제하시겠습니까?")
    if (removeConfirm) this.onRemoveAll()
  }

  this.$todoDeleteButton.addEventListener("click", () => {
    this.$todoDeleteButton.dispatchEvent(this.removeAllEvent)
  })
  this.$todoDeleteButton.addEventListener("removeAll", () => this.removeButtonHandler())
}
export default TodoDeleteAll
