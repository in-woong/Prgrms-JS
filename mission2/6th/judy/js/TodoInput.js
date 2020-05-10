
function TodoInput($target, { onAddTodo }) {
  this.$target = $target
  this.render = () => {
    $target.addEventListener("keydown", e => {
      if (e.keyCode === 13) {
        onAddTodo(e.target.value);
        e.target.value = "";
      }
    })
  }
  this.render()
}