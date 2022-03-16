import { triggerDebounce } from './utils.js';

function SearchInput($target, onSearch, recordSearchHistory) {
  const input = document.createElement('input');

  $target.appendChild(input);
  input.addEventListener('keyup', (e) => {
    const { value } = e.target;
    this.setState(value);
    recordSearchHistory(value);
    triggerDebounce(() => onSearch(value), 150);
  });

  this.setState = (nextState) => {};
}

export default SearchInput;
