function TodoList($target, data) {
  this.$target = $target;
  this.data = data;

  this.setState = function(data) {
    this.data = data;
    this.render();
  };

  this.render = function() {
    const htmlString = this.data.map(function(todo) {
      return `<li>${todo.text}</li>`;
    });

    $target.innerHTML = `<ul>${htmlString.join("")}</ul>`;
  };

  this.render();
}
