import SearchInput from './components/SearchInput.js';
import SearchResult from './components/SearchResult.js';
import ErrorModal from './components/ErrorModal.js';
import SearchHistory from './components/SearchHistory.js';
import { validator } from './utils.js';
import { fetchImages } from './api.js';

function App() {
  const $searchInput = document.querySelector('#search-input');
  const $searchResult = document.querySelector('#search-result');
  const $errorModal = document.querySelector('#error-modal');
  const $searchHistory = document.querySelector('#search-history');

  this.data = [];
  this.errors = [];
  this.history = [];
  this.displayedHistory = [];

  this.searchInput;
  this.searchResult;
  this.errorModal;
  this.searchHistory;

  // test code for error test button
  const $testButton = document.querySelector('#test-button');
  $testButton.addEventListener('click', () => {
    this.addErrorItem('test-error');
  })

  this.addErrorItem = err => {
    this.errorModal.addErrorItem(err);
  }
  // end of test code

  this.inputChange = e => {
    if (validator.isEmpty(e.target.value)) return;
    this.getImages(e.target.value, false);
  }

  this.getImages = async (keyword, fromHistory) => {
    if (this.history[this.history.length - 1] === keyword) return;
    const result = await fetchImages(keyword);
    this.update(result);
    this.addHistory(keyword);
    if (fromHistory) return;
    this.addDisplayedHistory(keyword);
  }

  this.addHistory = str => {
    this.history.push(str);
  }

  this.addDisplayedHistory = str => {
    this.displayedHistory.push(str);
    this.searchHistory.setState(this.history);
  }

  this.update = newData => {
    this.searchResult.setState(newData);
  }

  this.init = () => {
    this.searchInput = new SearchInput({
      $target: $searchInput,
      onKeyup: this.inputChange,
    });
  
    this.searchResult = new SearchResult({
      $target: $searchResult,
      data: this.data,
    });
    
    this.errorModal = new ErrorModal({
      $target: $errorModal,
    })

    this.searchHistory = new SearchHistory({
      $target: $searchHistory,
      data: this.displayedHistory,
      onClick: this.getImages,
    })
  }
  
  try {
    this.init();
  } catch (err) {
    throw new Error(err);
  }
}

new App();
