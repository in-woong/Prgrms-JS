export default class TodoCount {
  constructor({ $root, createDOMElement, initialState }) {
    this.$root = $root;
    this.createDOMElement = createDOMElement;

    this.state = initialState;

    this.container = this.createDOMElement('div', [
      { attr: 'class', value: 'todo-count' },
    ]);
    this.todoCount = this.createDOMElement('span');

    this.container.appendChild(this.todoCount);
    this.$root.appendChild(this.container);

    this.render();
  }

  render() {
    const total = this.state.length;
    const completed = this.state.filter((todo) => todo.isCompleted).length;
    this.todoCount.innerText = `총 : ${total}, 완료 : ${completed}`;
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }
}
