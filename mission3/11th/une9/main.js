import { SearchInput } from "./searchInput.js";
import { SearchHistory } from "./searchHistory.js";
import { SearchResult } from "./searchResult.js";

(async function() {
  let data, keyword;

  const setState = (isHistoryClick) => {
    searchResult.setState(data);
    if (!isHistoryClick) {
      searchHistory.setState(keyword);
    }
  }

  const fetchAPI = async (targetValue) => {
    try {
      const response = await fetch(`https://jjalbot.com/api/jjals?text=${targetValue}`);
      return response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  const onSearch = async ({targetValue, isHistoryClick}) => {
    keyword = targetValue;
    data = await fetchAPI(keyword);
    setState(isHistoryClick);
  }

  const searchInput = new SearchInput({
    target: document.querySelector('#search-keyword'),
    onInputWord: (targetValue) => {
      onSearch({
        targetValue: targetValue,
        isHistoryClick: false
      });
    }
  });

  const searchResult = new SearchResult(data, document.querySelector('#search-result'));

  const searchHistory = new SearchHistory({
    target: document.querySelector('#search-history'),
    onHistoryClick: (targetValue) => {
      onSearch({
        targetValue: targetValue,
        isHistoryClick: true
      });
    }
  });
})();
