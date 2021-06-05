function TodoCount($app, state) {
  this.$target = document.createElement("div");
  this.$target.setAttribute("data-component-type", "TodoCount");
  $app.appendChild(this.$target);
  this.state = state;

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = `<span> Todo Count: ${this.state.length}</span>`;
  };

  this.render();
}
export default TodoCount;
