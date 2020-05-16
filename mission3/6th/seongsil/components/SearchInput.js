function SearchInput($target, data, { onSearchKeyword }) {
  if (!new.target) {
    throw new Error('SearchInput을 new로 사용해야 합니다.');
  }

  $target.addEventListener('keyup', event => {
    onSearchKeyword(event.target.value);
  });
}

export default SearchInput;
