export default class SearchHistory {
    constructor({ $app, initialState: { searchHistory }, onClickHistory, }) {
        this.$target = document.createElement('ul');
        this.state = searchHistory;
        this.onClickHistory = onClickHistory;

        this.$target.addEventListener('click', ({ target }) => {
            if (target.closest('li') !== null) {
                this.onClickHistory(target.closest('li').innerText);
            }
        });

        $app.appendChild(this.$target);
    }

    render() {
        this.$target.innerHTML = this.state.reduce((acc, cur)  => `${acc} <li>${cur}</li>`,'');
    }

    setState({ searchHistory }) {
        this.state = searchHistory;
        this.render();
    }
}
