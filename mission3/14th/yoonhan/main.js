import { SearchInput } from './modules/SearchInput.js';
import { SearchResult } from './modules/SearchResult.js';
import { SearchHistory } from './modules/SearchHistory.js';
import { fetchImageData } from './modules/api.js';
import { debounce } from './modules/utils.js';
import errorMessages from './modules/errorMessages.js';

function App($target) {
  if (!new.target) {
    throw new Error(errorMessages.WITHOUT_NEW);
  }

  this.state = { imagesData: [], history: [] };

  this.setState = (nextState) => {
    this.state = nextState;
    this.searchHistory.setState(this.state);
    this.searchResult.setState(this.state);
  };

  this.setImagesData = async (searchText) => {
    if (searchText === '') {
      return;
    }

    const imagesData = await fetchImageData(searchText);
    this.setState({
      ...this.state,
      imagesData,
    });
  };

  this.addToHistory = (searchText) => {
    if (searchText === '' || this.state.history.includes(searchText)) {
      return;
    }

    const { history } = this.state;
    const newHistory = [...history, searchText];
    this.setState({
      ...this.state,
      history: newHistory,
    });
  };

  this.handleHistoryClick = (event) => {
    const liElement = event.target.closest('li');
    const {
      dataset: { searchText },
    } = liElement;
    this.setImagesData(searchText);
  };

  this.searchHistory = new SearchHistory({
    $target: document.querySelector('#search-history'),
    initialState: this.state,
    onClick: this.handleHistoryClick,
  });

  this.searchInput = new SearchInput({
    $target: document.querySelector('form[role=search]'),
    onSubmit: (event) => {
      event.preventDefault();
    },
    onInput: debounce((event) => {
      const searchText = event.target.value;
      this.setImagesData(searchText);
      this.addToHistory(searchText);
    }),
  });

  this.searchResult = new SearchResult({
    $target: document.querySelector('#search-result'),
    initialState: this.state,
  });
}

new App(document.querySelector('#app'));
