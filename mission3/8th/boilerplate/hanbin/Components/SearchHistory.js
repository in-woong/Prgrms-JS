export default function SearchHistory($target, onClickHistory) {

    this.$target = $target;
    this.onClickHistory = onClickHistory;

    this.prerender = () => {
        this.historyHeader = document.createElement('h1');
        this.historyHeader.innerHTML = "검색 기록";

        this.searchHistory = document.createElement('ul');
        this.searchHistory.id = 'search-history';

        $target.appendChild(this.historyHeader);
        $target.appendChild(this.searchHistory);
    }
    
    this.bindOnClickEvent = () => {
        this.searchHistory.addEventListener('click', (evt) => {
            if(evt.target.tagName === 'LI'){
                onClickHistory(evt.target.innerHTML);
            }
        })
    }

    this.setState = (newData) => {
        //SearchHistory의 this.data는 App this.data.searchedTexts
        this.data = newData;
        this.render();
    }

    this.render = () => {
        this.searchHistory.innerHTML = `
            ${this.data.map(d =>
                `<li>${d}</li>`
            ).join('')}
        `;
        this.bindOnClickEvent();
    }
    
    this.prerender();
}
