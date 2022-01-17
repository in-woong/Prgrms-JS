export default function SearchResult({ initialState, $target }) {
    this.$target = $target;
    this.keyword = '';

    const $searchKeyword = document.createElement('div');
    this.$target.appendChild($searchKeyword);

    const $searchResult = document.createElement('div');
    this.$target.appendChild($searchResult);

    this.setState = (newState, keyword) => {
        this.state = newState;
        this.keyword = keyword;
        this.render();
    };
    
    this.render = () => {
        const htmlString = `${this.keyword ? `<h3>${this.keyword} 검색 결과 (${this.state.length})</h3>` : ''}
            ${this.state.map(data => `<img src="${data.imageUrl}">`).join('')}`;
        $searchResult.innerHTML = htmlString;
    };
  
    this.setState(initialState);
}
