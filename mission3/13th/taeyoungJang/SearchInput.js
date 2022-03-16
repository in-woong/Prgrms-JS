import { debounce } from './utils.js';

function SearchInput({ $target, onChange }) {
  this.$target = $target;

  $target.addEventListener('keyup', debounce(onChange));
}

export default SearchInput;
