export default function TodoCount($target, todos) {
  this.$target = $target
  const completedToods = todos.filter((todo) => todo.isCompleted === true).length
  this.$target.innerHTML = `<p id="todo-count">${todos.length}개의 할 일 중에 ${completedToods}개를 완료했습니다.</p>`
}
