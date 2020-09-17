function SearchHistory(app, historyBox) {
    this.app = app;
    this.historyBox = historyBox;

    const keywordArr = [];

    this.addHistory = (keyword) => {
        keywordArr.push(keyword);

        this.historyBox.innerHTML = keywordArr.map(keyword => {
            return `<li>${keyword}</li>`
        }).join('');

    }
    this.addHistory();
}
export default SearchHistory;