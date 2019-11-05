function SearchResult({data, $parent}) {
    this.data = data;
    const $el = document.createElement('div');
    $el.setAttribute('id', 'search-result');
    $parent.appendChild($el);

    this.setState = data => {
        this.data = data;
        this.render();
    };

    this.createSearchResultHTMLString = () => {
        return this.data.map(d => `<img src="${d.imageUrl}" />`).join('');
    };

    this.render = () => {
        document.querySelector('#search-result').innerHTML = this.createSearchResultHTMLString();
    }
};

export default SearchResult;