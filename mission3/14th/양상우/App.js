import {
  SearchInput,
  SearchResult,
  SearchHistory,
} from './components/index.js';
import getAPI from './Api/Api.js';
import { $ } from './util/query.js';

export default function App({ $target }) {
  this.state = {
    data: [],
    inputList: [],
  };

  this.setState = (nextState, setInputList = true) => {
    this.state.data = nextState.data;
    searchresult.setState(this.state);

    // input List는 기본적으로 변경이 되나, searchHistory에 의해 false로 값이 변경될 경우, input List는 변경되지 않는다
    if (!setInputList) return;
    this.state.inputList = [...this.state.inputList, nextState.inputList];
    searchHistory.setState(this.state);
  };

  this.loadingText = (parentEL) => {
    const markup = `
        <div class="loading-text">
        불러오는중..
    </div> 
  `;
    parentEL.innerHTML = '';
    parentEL.insertAdjacentHTML('afterbegin', markup);
  };

  const searchInput = new SearchInput({
    $target,
    initialState: this.state,
    getAPI,
    setState: this.setState,
    loadingText: () => this.loadingText($('.search-result')),
  });

  const searchHistory = new SearchHistory({
    $target: $('.search-keyword'),
    initialState: this.state,
    getAPI,
    setState: this.setState,
    loadingText: () => this.loadingText($('.search-result')),
  });

  const searchresult = new SearchResult({
    $target,
    initialState: this.state,
  });
}
