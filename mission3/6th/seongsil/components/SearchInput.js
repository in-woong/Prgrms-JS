import { debounce } from '../utils/debounce.js';

function SearchInput($target, { onSearchKeyword }) {
  if (!new.target) {
    throw new Error('SearchInput을 new로 사용해야 합니다.');
  }

  $target.addEventListener('keyup', debounce(event => {
      onSearchKeyword(event.target.value)
  }));
}

export default SearchInput;
