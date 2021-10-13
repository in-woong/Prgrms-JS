function TodoInput({ $target, onAddTodo }) {
  this.$target = $target
  this.$todoInput = document.createElement("input")
  this.$todoInput.setAttribute("data-component-type", "TodoInput")
  this.$todoInput.setAttribute("placeholder", "할 일을 입력해 주세요")
  this.$target.appendChild(this.$todoInput)

  this.onAddTodo = onAddTodo

  this.todoInsertHandler = (e) => {
    if (e.key !== "Enter") return

    if (e.target.value.trim() === "") {
      alert("Todo를 입력하세요")
      return
    }
    this.onAddTodo(e.target.value)
    this.$todoInput.value = ""
    this.$todoInput.focus()
  }

  this.$todoInput.addEventListener("keyup", this.todoInsertHandler)
}
export default TodoInput
