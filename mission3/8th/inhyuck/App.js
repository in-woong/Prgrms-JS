function App(target) {
    this.$target = document.querySelector(target);
    this.data = {
        searchText: '',
        searchTexts: [],
        searchedItems: [],
    };

    let searchHistory = null;
    let searchKeyword = null;
    let searchResult = null;

    const onClickSearchText = ({searchTextIndex}) => {
        const clickedSearchText = this.data.searchTexts[searchTextIndex];
        this.setState({searchText: clickedSearchText});
    };

    const onKeyupSearchInput = ({searchText}) => {
        const searchTexts = [
              ...this.data.searchTexts,
              searchText,
        ];
        this.setState({searchText, searchTexts});
    };

    this.render = function() {
        if (this.$target.innerHTML) {
            searchHistory.render();
            searchResult.render();
            searchKeyword.render();
            return;
        }

        this.$target.innerHTML = `
            <div class="search-history"></div>
            <div class="search-input"></div>
            <div class="search-result"></div>  
        `;

        searchHistory = new SearchHistory({searchTexts: this.data.searchTexts}, '.search-history', onClickSearchText);
        searchKeyword = new SearchInput({searchText: this.data.searchText}, '.search-input', onKeyupSearchInput);
        searchResult = new SearchResult({searchedItems: this.data.searchedItems}, '.search-result');
    };

    this.setState = async function({searchText = this.data.searchText, searchTexts = this.data.searchTexts}) {
        this.data.searchText = searchText;
        this.data.searchTexts = searchTexts;
        this.data.searchedItems = await fetchSearchResult({searchText});
        searchKeyword.setState({searchText});
        searchHistory.setState({searchTexts: this.data.searchTexts});
        searchResult.setState({searchedItems: this.data.searchedItems});
        this.render();
    };

    this.render();
}
