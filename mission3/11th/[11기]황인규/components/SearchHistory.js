
function SearchHistory({$app, $state, onSearchHistory}){
    this.$app = $app;
    this.onSearchHistory = onSearchHistory;
    this.$state= $state;
    
    const searchHistoryWrapper = document.createElement("ul");
    searchHistoryWrapper.className="search-history-wrapper";
    this.$app.appendChild(searchHistoryWrapper);

    

    this.setState = (nextState) => {
        this.$state = nextState;
        this.render(this.$state);

    }

    this.render = (state) => {
        const htmlString = `${state.searchHistory.map(d => `<li class="search-history"
                                                    >${d.data}</li>`).join('')}`
        searchHistoryWrapper.innerHTML = htmlString;
    }

    this.clickSearchHistory = (li) => {
        this.onSearchHistory(li.innerText);
    }



    searchHistoryWrapper.addEventListener("click", (event) => {
        const {classList} = event.target
        if(classList.contains("search-history"))
            this.clickSearchHistory(event.target.closest("li"));
    });

    

}

export default SearchHistory;