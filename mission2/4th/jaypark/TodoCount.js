class TodoCount {
  constructor(counterId) {
    this.$counter = document.querySelector(counterId);
    this.done = 0
    this.total = 0
  }

  setState(items) {
    this.done = items.filter((e) => e.done).length;
    this.total = items.length;

    this.render();
  };

  render(total = 0, done = 0) {
    this.$counter.innerHTML = `Total : ${this.total}, Done : ${this.done}`;
  };
}
