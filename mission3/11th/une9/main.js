import { SearchInput } from "./searchInput.js";
import { SearchHistory } from "./searchHistory.js";
import { SearchResult } from "./searchResult.js";

class App {
  constructor() {
    this.data = [];
    this.keyword = '';

    this.searchInput = new SearchInput({
      target: document.querySelector('#search-keyword'),
      onInputWord: (targetValue) => {
        this.onSearch({
          targetValue: targetValue,
          isHistoryClick: false
        });
      }
    });
  
    this.searchResult = new SearchResult(this.data, document.querySelector('#search-result'));
  
    this.searchHistory = new SearchHistory({
      target: document.querySelector('#search-history'),
      onHistoryClick: (targetValue) => {
        this.onSearch({
          targetValue: targetValue,
          isHistoryClick: true
        });
      }
    });
  }

  setState(isHistoryClick) {
    this.searchResult.setState(this.data);
    if (!isHistoryClick) {
      this.searchHistory.setState(this.keyword);
    }
  }

  async fetchAPI(targetValue) {
    try {
      const response = await fetch(`https://jjalbot.com/api/jjals?text=${targetValue}`);
      if(response.ok) {
        return response.json();
      }
      throw new Error('응답이 올바르지 않습니다.');
    } catch (error) {
      throw new Error(error);
    }
  }

  async onSearch({targetValue, isHistoryClick}) {
    this.keyword = targetValue;
    this.data = await this.fetchAPI(this.keyword);
    this.setState(isHistoryClick);
  }
}

const app = new App();
