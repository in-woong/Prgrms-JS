import { createDOMElement } from '../util/index.js';

export default class SearchInput {
  constructor({ $target, searchData }) {
    this.$target = $target;
    this.searchInput = createDOMElement('input', [
      { attr: 'type', value: 'text' },
      { attr: 'class', value: 'search-keyword' },
      { attr: 'placeholder', value: '검색어를 입력해주세요.' },
    ]);
    this.render();
    this.searchEventListener = this.searchEventListener.bind(this);
    this.searchInput.addEventListener('keyup', this.searchEventListener);
    this.searchData = searchData;
  }

  render() {
    this.$target.appendChild(this.searchInput);
    this.searchInput.focus();
  }

  searchEventListener(e) {
    const { value } = e.target;
    if (value.trim()) this.searchData(value);
    else return;
  }
}
