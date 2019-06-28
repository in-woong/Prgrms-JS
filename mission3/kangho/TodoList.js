export default class TodoList {
  constructor($target, data) {
    this.$target = $target;
    this.data = data;  
  }

  setState(data) {
    this.data = data;
    this.render();
  };

  createTemplate() {
    return this.data.map((todo) => {
      return `<li>${todo.text}</li>`;
    });
  }

  render() {
    const htmlString = this.createTemplate();
    this.$target.innerHTML = `<ul>${htmlString.join("")}</ul>`;
  };
}