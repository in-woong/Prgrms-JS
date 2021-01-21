export default function SearchHistory({ historyKeywords, onAddHistory, onDelHistory, onSearch, target }) {
    this.historyData = historyKeywords;
    this.onAddHistory = onAddHistory;
    this.onDelHistory = onDelHistory;
    this.onSearch = onSearch;

    this.$searchHistory = target;

    this.render = () => {
        const htmlString = `${this.historyData
            .map((item, index) => `<li data-index="${index}" class="history-items">${item}<button data-index="${index}" class="btn-delete">X</button></li>`)
            .join('')}`;
        this.$searchHistory.innerHTML = `<ul>${htmlString}</ul>`;
        console.log(this.historyData);
    }

    this.$searchHistory.addEventListener('click', (e) => {
        // todo LI 요소를 클릭했을 경우 해당 키워드로 움짤 검색
        if(e.target && e.target.nodeName === 'LI') {
            const reSearchIndex = e.target.getAttribute('data-index');
            this.onSearch(historyKeywords[reSearchIndex]);
        }

        // delete button 요소를 클릭했을 경우 키워드 검색
        if(e.target && e.target.nodeName === 'BUTTON') {
            const deleteIndex = e.target.getAttribute('data-index');
            this.onDelHistory(deleteIndex);
        }

    })

    this.setState = (nextData) => {
        this.historyData = nextData;
        this.render();
    }

    this.render();
}