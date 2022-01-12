export default function SearchHistory({ $target, onHistoryClicked }) {
    this.$target = $target;
    this.onHistoryClicked = onHistoryClicked;
    this.state = [];

    const $searchHistory = document.createElement('div');
    this.$target.appendChild($searchHistory);

    this.render = () => {
        const htmlString = `<ul>${this.state.map(history => `<li class="keyword-history">${history}</li>`).join('')}</ul>`;
        $searchHistory.innerHTML = htmlString;
    };

    this.addHistory = (history) => {
        if (history === null || history === undefined || history === '') return;

        this.state = [...this.state,
            history
        ];
        this.render();
    };

    $searchHistory.addEventListener('click', (e) => {
        if (e.target.className !== 'keyword-history') return;

        onHistoryClicked(e.target.innerHTML);
    });
}
