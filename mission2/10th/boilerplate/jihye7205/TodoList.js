function TodoList($target, todos) {
  if (validateType(todos) && validateFormat(todos)) {
    this.$target = $target;
    this.data = todos;
  }

  this.render = function () {
    this.$target.innerHTML = this.data.map((todo) => `<div>${todo.isCompleted ? todo.text : `<s>` + todo.text + `</s>`}</div>`).join("");
  };

  this.setState = function (nextData) {
    if (validateType(nextData) && validateFormat(nextData)) {
      this.data = nextData;
      this.render();
    }
  };

  this.render();
}
