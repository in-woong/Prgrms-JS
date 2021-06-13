import SearchInput from './SearchInput.js';

class App {
  constructor($app) {
    if (!$app) throw new Error('타겟 DOM이 없습니다');

    this.searchInput = new SearchInput({
      $parent: $app,
      onInput: this.onSearchTermInput.bind(this),
    });
  }

  onSearchTermInput(searchTerm) {
    // search
    console.log(searchTerm);
  }
}

export default App;
