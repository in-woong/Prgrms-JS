function SearchHistory({
    elementId,
    histories,
    searchJjals
}) {
    if(!new.target) {
        throw new Error(elementId);
    }

    this.$searchHistory = document.getElementById(elementId);
    this.histories = histories;

    this.setState = histories => {
        this.histories = [...histories];
        this.render();
    }

    this.bindEventListener = () => {
        this.$searchHistory.addEventListener('click', evt => {
            if(evt.target.tagName !== 'LI') {
                return;
            }
            searchJjals(evt.target.dataset.history);
        });
    }

    this.render = () => {
        this.$searchHistory.innerHTML = `
        <ul>
            ${this.histories.map(history => `<li data-history=${history}>${history}</li>`).join('')}
        </ul>
        `;
    }

    this.bindEventListener();
}

export default SearchHistory;
