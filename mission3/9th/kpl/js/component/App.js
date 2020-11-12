import SearchKeyword from './SearchKeyword.js'
import SearchResult from './SearchResult.js'

function App({$app}) {
    this.$app = $app;
    this.data = [];
    this.setState = (searchResultData) => {
        this.data = searchResultData;
        this.components.forEach((component) => {
            component.setState && component.setState(this.data);
        });
    };

    this.components = [
        new SearchKeyword({
            $app,
            onSearchResult: this.setState
        }),
        new SearchResult({
            $app,
            data: this.data
        })
    ];
}

export default App
