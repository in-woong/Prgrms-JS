function TodoInput({ onClick }) {
  this.onClick = onClick
  document.querySelector("#add-todo-button").addEventListener("click", () => this.onClick())
}

export default TodoInput
