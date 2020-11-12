import SearchKeyword from './SearchKeyword.js'
import SearchResult from './SearchResult.js'

function App({$app}) {
    this.$app = $app;
    this.data = [];
    this.components = [
        new SearchKeyword({$app,
            onSearchResult: (searchResultData) => {
                this.setState(searchResultData);
            }
        }),
        new SearchResult({$app,
            data: this.data
        })
    ];

    this.setState = (searchResultData) => {
        this.data = searchResultData;
        this.components.forEach((component) => {
            component.setState && component.setState(this.data);
        });
    };
}

export default App
