export default class Users {
  constructor({ $root, createDOMElement, initialState, searchTodoList }) {
    this.$root = $root;
    this.createDOMElement = createDOMElement;
    this.searchTodoList = searchTodoList;

    this.state = initialState;

    this.users = this.createDOMElement('ul', [
      { attr: 'class', value: 'user-list' },
    ]);

    this.$root.appendChild(this.users);

    this.searchTodoListListener = this.searchTodoListListener.bind(this);
    this.users.addEventListener('click', this.searchTodoListListener);

    this.render();
  }

  render() {
    this.users.innerHTML = this.state.reduce((acc, user) => {
      return `${acc}<li data-user=${user}>${user}</li>`;
    }, '');
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  async searchTodoListListener(event) {
    if (event.target.nodeName === 'LI') {
      const { user } = event.target.dataset;
      this.searchTodoList(user);
    }
  }
}
