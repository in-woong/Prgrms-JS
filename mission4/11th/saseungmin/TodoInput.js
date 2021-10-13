class TodoInput {
  constructor({ target, onInsert }) {
    this.$target = document.querySelector(target);
    this.handleInsert = onInsert;
    this.bindKeypressEvent();
  }

  bindKeypressEvent() {
    this.$target.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && e.target.value.trim().length > 0) {
        this.handleInsert(e.target.value);

        e.target.value = '';
      }
    });
  }
}

export default TodoInput;
