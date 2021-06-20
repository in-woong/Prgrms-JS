(async function() {
  const searchInput = new SearchInput({
    target: document.querySelector('#search-keyword'),
    onSearch: async (targetValue) => {
      this.data = await this.fetchAPI(targetValue);
      this.setState(this.data);
    }
  });

  const searchResult = new SearchResult(this.data, document.querySelector('#search-result'));

  this.setState = (data) => {
    searchResult.setState(data);
  }

  this.fetchAPI = async (targetValue) => {
    try {
      const response = await fetch(`https://jjalbot.com/api/jjals?text=${targetValue}`);
      return response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
  
})();
