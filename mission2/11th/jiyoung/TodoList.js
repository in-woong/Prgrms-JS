function TodoList($app, initialState) {
  this.state = initialState;

  this.$target = document.createElement("div");
  this.$target.setAttribute("data-component-type", "TodoList");
  $app.append(this.$target);

  this.render = function () {
    const $html = this.state.map((item) => `<li ${item.isCompleted ? "class='completed'" : ""}>${item.text}</li>`).join("");
    this.$target.innerHTML = `<ul>${$html}</ul>`;
  };

  this.setState = function (nextData) {
    this.state = nextData;
    this.render();
  };

  this.render();
}
