import SearchKeyword from './SearchKeyword.js'
import SearchResult from './SearchResult.js'

function App({$app}) {
    this.$app = $app;
    this.searchResultData = [];
    this.setState = (searchResultData) => {
        this.searchResultData = searchResultData;
        this.components.forEach((component) => {
            component.setState && component.setState(this.searchResultData);
        });
    };

    this.components = [
        new SearchKeyword({
            $app,
            onSearchResult: this.setState
        }),
        new SearchResult({
            $app,
            searchResultData: this.searchResultData
        })
    ];
}

export default App
