export default function SearchHistory($target, updateData) {

    this.$target = $target;
    this.updateData = updateData;

    this.prerender = () => {
        this.historyHeader = document.createElement('h1');
        this.historyHeader.innerHTML = "검색 기록";

        this.searchHistory = document.createElement('ul');
        this.searchHistory.id = 'search-history';

        $target.appendChild(this.historyHeader);
        $target.appendChild(this.searchHistory);
    }
    
    this.addHistoryElem = (inputValue) => {
        const historyElem = document.createElement('li');
        historyElem.innerHTML = `${inputValue}`;
        historyElem.addEventListener('click', () => {
            updateData(inputValue);
        })
        this.searchHistory.appendChild(historyElem);
    }
    
    this.prerender();
}
