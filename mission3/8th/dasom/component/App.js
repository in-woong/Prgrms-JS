function App(){
    this.data = '';
    const $inputTarget = document.querySelector('#search-keyword');
    const $resultTarget = document.querySelector('#search-result');

    this.getImageData = (data) => {
        this.searchResult.setState(data);
    }

    this.render = () => {
        this.searchResult.render();
    }

    this.searchInput = new SearchInput($inputTarget, this.getImageData);
    this.searchResult = new SearchResult(this.data, $resultTarget);
}