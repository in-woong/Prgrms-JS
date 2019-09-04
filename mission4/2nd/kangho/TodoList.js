export default class TodoList {
  constructor($target) {
    this.$target = $target;
    this.state = {
      todoList: [],
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
    if (this.state.isLoading) {
      return ['<h1>....Loading</h1>']
    }
    return this.state.todoList.map((todo, idx) => {
      return `
        <li data-key='${todo._id}' data-node='list-tag' class=${todo.isCompleted ? 'completed' : '' } >
          ${todo.content}
          <button data-node='remove-btn' >remove</button>
        </li>
      `;
    });
  }

  init(data = {}) {
    this.render(data);
    this.$target.addEventListener('click', (e) => {
      const { node } = e.target.dataset;
      const key = e.target.closest('[data-key]').dataset.key
      if(node === 'list-tag') {
        this.$target.dispatchEvent(new CustomEvent('toggleTodo', {
          bubbles: true,
          detail: {
            key,
          }
        }));  
      } else if (node === 'remove-btn') {
        this.$target.dispatchEvent(new CustomEvent('removeTodo', {
          bubbles: true,
          detail: {
            key,
          }
        }));  
      }
    });
  }

  render() {
    const htmlString = this.createTemplate();
    this.$target.innerHTML = `<ul>${htmlString.join("")}</ul>`;
  };
}