export default class TodoCount {
  constructor($wrapper) {
    this.$wrapper = $wrapper;
    this.state = {
      totalTodo: 0,
      completedTodo: 0,
    }

    this.init();
  }

  setState(data) {
    this.state = {
      ...this.state,
      ...data,
    };
    this.render();
  };

  createTemplate() {
    return `
      <div> total : ${this.state.totalTodo}</div>
      <div> completed : ${this.state.completedTodo}</div>
    `;
  }

  init(data = {}) {
    this.render()
  }

  render() {
    this.$wrapper.innerHTML = this.createTemplate();
  };
}