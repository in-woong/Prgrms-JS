export default class SearchHistory {
    constructor({ $app, initialState: { searchHistory }, onClickHistory, }) {
        this.$target = document.createElement('div');
        this.state = searchHistory;
        this.onClickHistory = onClickHistory;

        this.$target.addEventListener('click', ({ target }) => {
            this.onClickHistory(target.innerText);
        });

        $app.appendChild(this.$target);
    }

    render() {
        this.$target.innerHTML = this.state.reduce((acc, cur)  => `${acc} <article>${cur}</article>`,'')
    }

    setState({ searchHistory }) {
        this.state = searchHistory;
        this.render();
    }
}