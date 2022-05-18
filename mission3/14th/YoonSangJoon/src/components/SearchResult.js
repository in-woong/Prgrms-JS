import { createDOMElement } from '../util/index.js';

export default class SearchResult {
  constructor({ $target, initialState }) {
    this.$target = $target;
    this.searchResult = createDOMElement('div', [
      { attr: 'class', value: 'search-result' },
    ]);
    this.render();
    this.state = initialState;
  }

  render() {
    if (this.state) {
      const template = `<ul>${this.state
        .map(
          (image) =>
            `<li data-idx=${image._id}><img src="${image.imageUrl}" alt="${image.title}"></li>`
        )
        .join('')}</ul>`;
      this.searchResult.innerHTML = template;
      this.$target.appendChild(this.searchResult);
    }
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }
}
