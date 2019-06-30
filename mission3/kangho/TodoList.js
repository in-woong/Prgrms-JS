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
        <li data-key='${idx}' data-node='list-tag' class=${todo.isCompleted ? 'completed' : '' } >
          ${todo.text}
          <button data-node='remove-btn' >remove</button>
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
    })
  }

  render() {
    const htmlString = this.createTemplate();
    this.$target.innerHTML = `<ul>${htmlString.join("")}</ul>`;
  };
}