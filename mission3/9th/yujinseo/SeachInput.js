function SearchInput({$app, data, onSearch}) {
  this.data = data;

  const $searchInput = document.createElement('input');
  $searchInput.className = 'search-input';
  $app.appendChild($searchInput);

  $searchInput.addEventListener('keyup', function(e) {
    const keywordValue = e.target.value;
    if(keywordValue.length > 0) {
      onSearch(keywordValue);
    }
  });

  this.setState = (nextState) => {
    this.data = nextState;
  }
}

export default SearchInput;