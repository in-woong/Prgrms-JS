import { debounce } from './utils.js'

class SearchKeyword {
  constructor(targetId, onSearch) {
    this.timer = null;
    this.onSearch = onSearch;
    this.$target = document.querySelector(targetId);
    this.$target.addEventListener('keyup', (e) => {
      debounce.bind(this)(e, 1000);
    });
  }
}

export default SearchKeyword;
