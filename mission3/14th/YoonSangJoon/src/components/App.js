import fetchImages from '../api/fetchImages.js';
import { debounce } from '../util/index.js';
import { SearchInput, SearchResult, SearchHistory } from './index.js';

export default function App({ $target, initialState }) {
  this.$target = $target;
  this.state = initialState;
  this.searchData = debounce(async (keyword) => {
    const images = await fetchImages(keyword);
    searchResult.setState(images);

    if (!this.state.history.includes(keyword)) {
      this.state.history.push(keyword);
      searchHistory.setState(this.state.history);
    }
  });

  const searchHistory = new SearchHistory({
    $target: this.$target,
    initialState: this.state.history,
    searchData: this.searchData,
  });

  const searchInput = new SearchInput({
    $target: this.$target,
    searchData: this.searchData,
  });

  const searchResult = new SearchResult({
    $target: this.$target,
    initialState: this.state.data,
  });
}
