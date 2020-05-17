function App() {
    this.data = null;
    this.inputText = null;

    const $SEARCH_RESULT = document.querySelector('#search-result');
    const $SEARCH_KEYWORD = document.querySelector('#search-keyword');

    const searchResult = new SearchResult($SEARCH_RESULT, this.data);
    const searchInput = new SearchInput($SEARCH_KEYWORD, this.inputText);

    $SEARCH_KEYWORD.addEventListener('keyup', function (e) {
        this.inputText = e.target.value;
        searchInput.fetchData({
            inputText: this.inputText,
            onUpdateData: (nextData) => {
                this.data = nextData;
                searchResult.setState(this.data);
            }
        });
    })
}
