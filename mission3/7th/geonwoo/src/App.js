import SearchInput from './components/SearchInput.js';
import SearchResult from './components/SearchResult.js';
import SearchHistory from './components/SearchHistory.js';
import { fetchData } from './utils/index.js';

export default class App {
  constructor(target) {
    this.$target = target;
    this.data = {
      jjals: [],
      histories: [],
    };

    this.searchResult = new SearchResult({
      target: document.querySelector('#search-result'),
      state: this.data.jjals,
      setState: this.setState,
    });
    this.searchHistory = new SearchHistory({
      target: document.querySelector('#search-history'),
      state: this.data.histories,
      setState: this.setState,
      searchGif: this.searchGif,
    });

    new SearchInput({
      target: document.querySelector('#search-keyword'),
      searchGif: this.searchGif,
      setState: this.setState,
    });

    this.searchLoading = document.querySelector('#search-loading');
  }

  setState = ({ jjals, text, deleteText }) => {
    this.data = {
      jjals: jjals ? [...jjals] : this.data.jjals, // jjals가 있으면 새로운 배열로 아니면 그대로
      histories: text // text가 있으면 더한 것, deleteText가 있으면 뺀 것, 아니면 그대로
        ? this.data.histories.filter((history) => history !== text).concat(text)
        : deleteText
        ? this.data.histories.filter((history) => history !== deleteText)
        : this.data.histories,
    };
    this.searchResult.setState(this.data.jjals);
    this.searchHistory.setState(this.data.histories);
  };

  searchGif = async (text) => {
    try {
      this.searchLoading.style.display = 'flex';
      const data = await fetchData(text);
      return data;
    } catch (err) {
      console.error(err);
    } finally {
      this.searchLoading.style.display = 'none';
    }
  };
}
