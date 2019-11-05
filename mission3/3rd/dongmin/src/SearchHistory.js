function SearchHistory({data, onClick, $parent}) {
    this.data = data;
    const $el = document.createElement('ul');
    $el.setAttribute('id', 'search-history');
    $parent.appendChild($el);

    this.setState = data => {
        this.data = data;
        this.render();
    };

    this.createSearchResultHTMLString = () => {
        return this.data.map(d => `<button>${d}</button>`).join('');
    };

    this.render = () => {
        document.querySelector('#search-history').innerHTML = this.createSearchResultHTMLString();
    }
};

export default SearchHistory;