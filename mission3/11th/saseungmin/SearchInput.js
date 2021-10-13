import debounce from './utils.js';

class SearchInput {
  constructor(target, onChange) {
    this.$target = document.querySelector(target);
    this.onChange = onChange;
    this.handleChange();
  }

  handleChange() {
    this.$target.addEventListener('keyup', debounce((e) => this.onChange(e.target.value), 200));
  }
}

export default SearchInput;
