function TodoCount({ targetEl, initialState }) {
  this.state = initialState;

  const countEl = document.createElement("div");
  countEl.className = "todo-count";
  targetEl.appendChild(countEl);

  this.countEl = countEl;

  this.render = () => {
    const completedCount = this.state.filter((todo) => todo.isCompleted).length;
    this.countEl.innerHTML = `총 ${this.state.length}개 중 ${completedCount}개 완료`;
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render();
}
