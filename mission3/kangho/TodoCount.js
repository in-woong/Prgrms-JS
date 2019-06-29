export default class TodoCount {
  constructor($wrapper) {
    this.$wrapper = $wrapper;
    this.data = {
      totalTodo: 0,
      completedTodo: 0,
    }
  }

  setState(data) {
    this.data = data;
    this.render();
  };

  createTemplate() {
    return `
      <div> total : ${this.data.totalTodo}</div>
      <div> completed : ${this.data.completedTodo}</div>
    `;
  }

  init(data) {
    this.setState(data);
  }

  render() {
    this.$wrapper.innerHTML = this.createTemplate();
  };
}