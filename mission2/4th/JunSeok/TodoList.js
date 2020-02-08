function TodoList($target, data) {
  this.$target = $target
  this.data = data

  this.render = function() {
    let list_count = 1;
    let delete_count = 1;
    this.$target.innerHTML = this.data
      .map(todo => todo.isCompleted ? `<div><span id="list_${list_count++}" onclick="completed_list(this.id)"><strike>${todo.text}</strike></sapn> <button id="delete_${delete_count++}" onclick="delete_list(this.id)">삭제</button></div>` : `<div><span id="list_${list_count++}" onclick="completed_list(this.id)">${todo.text}</sapn> <button id="delete_${delete_count++}" onclick="delete_list(this.id)">삭제</button></div>`)
      .join('')
  }

  this.setState = function(nextData) {
    this.data = nextData
    this.render()
  }
  this.render()
}