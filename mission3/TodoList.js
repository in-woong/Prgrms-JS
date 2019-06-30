class TodoList {
  constructor($target, data){
    this.$target = $target;
    this.data = data;
    this.render();

    this.setState = this.setState.bind(this);
  }

  setState(data) {
    this.data = data;
    this.render();
  }

  render() {
    const htmlString = this.data.map(function(todo) {
      return `<li>${todo.text}</li>`;
    });

    $target.innerHTML = `<ul>${htmlString.join("")}</ul>`;
  };

}
