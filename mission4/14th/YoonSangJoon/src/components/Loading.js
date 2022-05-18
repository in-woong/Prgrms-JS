export default class Loading {
  constructor({ $root, createDOMElement, initialState }) {
    this.$root = $root;
    this.createDOMElement = createDOMElement;

    this.state = initialState;

    this.container = this.createDOMElement('div', [
      { attr: 'class', value: 'todo-loading' },
    ]);

    this.$root.appendChild(this.container);
  }

  render() {
    this.container.innerHTML = `<span>데이터를 불러오는 중입니다...</span>`;
    this.container.style.display = this.state ? 'block' : 'none';
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }
}
