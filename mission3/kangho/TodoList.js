export default class TodoList {
  constructor($target) {
    this.$target = $target;
  }

  setState(data) {
    this.data = data;
    this.render();
  };

  createTemplate() {
    return this.data.map((todo, idx) => {
      return `
        <li data-key=${idx} class=${todo.isCompleted ? 'completed' : '' } >
          ${todo.text}
          <button>remove</button>
        </li>
      `;
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
          key: e.target.dataset.key,
        }
      }));      
      this.$target.dispatchEvent(new CustomEvent('removeTodo', {
        bubbles: true,
        detail: {
          key: e.target.parentElement.dataset.key,
        }
      }))
    })
  }

  render() {
    const htmlString = this.createTemplate();
    this.$target.innerHTML = `<ul>${htmlString.join("")}</ul>`;
  };
}