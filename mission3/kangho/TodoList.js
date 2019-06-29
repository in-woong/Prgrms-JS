export default class TodoList {
  constructor($target) {
    this.$target = $target;
  }

  setState(data) {
    this.data = data;
    this.render();
  };

  createTemplate() {
    return this.data.map((todo) => {
      return `<li class=${todo.isCompleted ? 'completed' : '' }>${todo.text}</li>`;
    });
  }

  getData() {
    return this.data; 
  }

  init(data) {
    this.setState(data);
    this.$target.addEventListener('click', (e) => {
      this.$target.dispatchEvent(new CustomEvent('toggleTodo', {
        bubbles: true,
        detail: {
          text: e.target.innerText,
        }
      }));  
    })
  }

  render() {
    const htmlString = this.createTemplate();
    this.$target.innerHTML = `<ul>${htmlString.join("")}</ul>`;
  };
}