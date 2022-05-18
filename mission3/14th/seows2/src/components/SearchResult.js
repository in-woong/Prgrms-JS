import Component from '../core/Component/Component.js';

class SearchResult extends Component {
  template() {
    const { searchResults = [] } = this.store.getState();

    return searchResults
      .map(({ imageUrl }) => `<img src="${imageUrl}"/>`)
      .join('');
  }
}

export default SearchResult;
