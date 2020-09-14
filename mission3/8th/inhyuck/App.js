function App(target) {
    this.$target = document.querySelector(target);
    this.data = {
        searchText: '',
        searchedItems: [],
    };

    let searchKeyword = null;
    let searchResult = null;

    const onKeyupSearchInput = ({searchText}) => {
        this.setState({searchText});
    };

    this.render = function() {
        if (this.$target.innerHTML) {
            this.searchKeyword.render();
            this.searchResult.render();
            return;
        }

        this.$target.innerHTML = `
            <div class="search-input"></div>
            <div class="search-result"></div>  
        `;

        searchKeyword = new SearchInput({searchText: this.data.searchText}, '.search-input', onKeyupSearchInput);
        searchResult = new SearchResult({searchedItems: this.data.searchedItems}, '.search-result');
    };

    this.setState = async function({searchText}) {
        this.data.searchText = searchText;
        this.data.searchedItems = await fetchSearchResult({searchText});
        searchKeyword.setState({searchText});
        searchResult.setState({searchedItems: this.data.searchedItems});
        this.render();
    };

    this.render();
}
