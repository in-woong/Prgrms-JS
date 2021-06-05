function TodoInput($app, onAddTodo) {
  this.$target = document.createElement("input")
  this.$target.setAttribute("data-component-type", "TodoInput")
  $app.appendChild(this.$target)

  this.onAddTodo = onAddTodo

  this.todoInsertHandler = (e) => {
    if (e.keyCode !== 13) return

    if (e.target.value.trim() === "") {
      alert("Todo를 입력하세요")
      return
    }
    this.onAddTodo(e.target.value)
    this.$target.value = ""
    this.$target.focus()
  }

  this.$target.addEventListener("keyup", this.todoInsertHandler)
}
export default TodoInput
