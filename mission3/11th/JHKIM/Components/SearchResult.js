export default class SearchResult {
    constructor({ $app, initialState: { searchResult } }) {
        this.$target = document.createElement('ul');

        this.state = searchResult;

        $app.appendChild(this.$target);

        this.render();

    }

    render() {
        this.$target.innerHTML = `${this.state.map(({imageUrl}) => imageUrl == null ? '' : `<li><img src="${imageUrl}"></li>` ).join('')}`;
    }

    setState({ searchResult }) {
        this.state = searchResult;

        this.render();
    }

}
