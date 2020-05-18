function App() {
    this.data = null;
    this.inputText = null;

    const $searchResult = document.querySelector('#search-result');
    const $searchKeyword = document.querySelector('#search-keyword');

    const searchResult = new SearchResult($searchResult, this.data);
    const searchInput = new SearchInput($searchKeyword, this.inputText);

    $searchKeyword.addEventListener('keyup', function (e) {
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
