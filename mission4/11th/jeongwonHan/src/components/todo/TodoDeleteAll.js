function TodoDeleteAll({ $target, state, onDeleteAll }) {
  this.$target = $target
  this.$todoDeleteButton = document.createElement("button")
  this.$todoDeleteButton.innerText = "모두 삭제"
  this.$target.appendChild(this.$todoDeleteButton)
  this.state = state
  this.onDeleteAll = onDeleteAll
  this.deleteAllEvent = new Event("deleteAll")

  this.deleteButtonHandler = () => {
    const deleteConfirm = confirm("정말 모두 삭제하시겠습니까?")
    if (deleteConfirm) this.onDeleteAll()
  }

  this.$todoDeleteButton.addEventListener("click", () => {
    this.$todoDeleteButton.dispatchEvent(this.deleteAllEvent)
  })
  this.$todoDeleteButton.addEventListener("deleteAll", () => this.deleteButtonHandler())
}

export default TodoDeleteAll
