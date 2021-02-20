const SearchInput = function({$app, onSearch}) {
  const $target = document.createElement('input');
  this.$target = $target;

  $target.className = 'search_input';
  $app.appendChild($target);

  $target.addEventListener("keyup", (e) => {
    onSearch(e.target.value);
  });
}

export default SearchInput;
