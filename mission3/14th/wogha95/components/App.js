import SearchResult from './SearchResult.js';
import SearchInput from './SearchInput.js';
import SearchHistory from './SearchHistory.js';
import fetchKeyword from '../api.js';
import { loadState, saveState } from '../Storage.js';
import { newAppError } from '../Error.js'

export default function App($target) {
  try {
    if(!new.target) throw new Error(newAppError);

    this.state = loadState() || [];

    const searchResult = new SearchResult($target);
    const searchInput = new SearchInput($target);
    const searchHistory = new SearchHistory($target, this.state);

    const searchKeywordEvent = async ({detail}) => {
      const fetchedData = await fetchKeyword(detail);
      searchResult.setState(fetchedData);
    }

    const enterKeywordEvent = async ({detail}) => {
      this.state.push(detail);
      searchKeywordEvent({detail})
      searchHistory.setState(this.state);
      saveState(this.state);
    }

    const clearSearchResultEvent = () => {
      searchResult.setState([]);
    }

    const deleteHistoryEvent = () => {
      this.state = [];
      searchHistory.setState(this.state);
      saveState(this.state);
    }

    $target.addEventListener('SearchKeywordEvent', searchKeywordEvent);
    $target.addEventListener('EnterKeywordEvent', enterKeywordEvent);
    $target.addEventListener('ClearSearchResultEvent', clearSearchResultEvent);
    $target.addEventListener('DeleteHistoryEvent', deleteHistoryEvent);
  } catch (error) {
    console.log(error);
  }
}
