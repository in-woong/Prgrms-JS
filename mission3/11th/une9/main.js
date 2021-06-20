(async function() {
  const searchInput = new SearchInput({
    target: document.querySelector('#search-keyword'),
    onInputWord: (keyword) => {
      this.onSearch({
        keyword: keyword,
        isHistoryClick: false
      });
    }
  });

  const searchResult = new SearchResult(this.data, document.querySelector('#search-result'));
  const searchHistory = new SearchHistory({
    target: document.querySelector('#search-history'),
    onHistoryClick: (keyword) => {
      this.onSearch({
        keyword: keyword,
        isHistoryClick: true
      });
    }
  });

  this.setState = (isHistoryClick) => {
    searchResult.setState(this.data);
    if (!isHistoryClick) {
      searchHistory.setState(this.keyword);
    }
  }

  this.fetchAPI = async (targetValue) => {
    try {
      const response = await fetch(`https://jjalbot.com/api/jjals?text=${targetValue}`);
      return response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  this.onSearch = async ({keyword, isHistoryClick}) => {
    this.keyword = keyword;
    this.data = await this.fetchAPI(keyword);
    this.setState(isHistoryClick);
  }
  
})();
