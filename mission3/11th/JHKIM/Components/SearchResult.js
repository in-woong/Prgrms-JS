export default class SearchResult {
  constructor({ $app, initialState: { searchResult: { data } } }) {
    this.$target = document.createElement('ul');

    this.state = data;

    $app.appendChild(this.$target);

    this.render();
  }

  render() {
    this.$target.innerHTML = `${this.state.map(({ imageUrl }) => (imageUrl == null ? '' : `<li><img src="${imageUrl}"></li>`)).join('')}`;
  }

  setState({ searchResult: { data } }) {
    this.state = data;

    this.render();
  }
}
