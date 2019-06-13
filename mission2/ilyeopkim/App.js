function App(){
    const appSelector = "#app";
    const searchResult = new SearchResult('search-result', appSelector);
    const searchInput = new SearchInput("search-keyword", appSelector, searchResult);
};
