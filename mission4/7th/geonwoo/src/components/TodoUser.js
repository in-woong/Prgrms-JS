class TodoUser {
  constructor(target, nowUser) {
    this.$target = target;
    this.nowUser = nowUser;
  }
  setState(newNowUser) {
    if (this.nowUser === newNowUser) return;

    this.nowUser = newNowUser;
    this.render();
  }
  render() {
    this.$target.innerHTML = this.nowUser;
  }
}

export default TodoUser;
