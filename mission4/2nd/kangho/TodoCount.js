export default class TodoCount {
  constructor($wrapper) {
    this.$wrapper = $wrapper;
    this.state = {
      totalTodo: 0,
      completedTodo: 0,
      isLoading: false,
    }

    this.init();
  }

  setState(data) {
    Object.keys(data).forEach(key => {
      this.state[key] = data[key];
    });
    this.render();
  };

  createTemplate() {
    if(this.state.isLoading) {
      return '';
    }
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