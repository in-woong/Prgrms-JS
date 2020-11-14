import SearchKeyword from './SearchKeyword.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'
import { JJALBOT_HISTORY_STORAGE_KEY } from '../constant/constant.js'
import { jsonParse, jsonStringify} from '../util/util.js'

function App({$app}) {
    this.$app = $app;
    this.searchResultData = [];
    this.init = () => {
        this.initLocalStorage();
        this.searchKeyword = new SearchKeyword({
            $app,
            onSearchResult,
            onAddSearchHistory,
        });
        this.searchHistory = new SearchHistory({
            $app,
            onFetchJjalbot,
            searchHistoryData: this.searchHistoryData
        });
        this.searchResult = new SearchResult({
            $app,
            searchResultData: this.searchResultData
        });
    };

    this.initLocalStorage = () => {
        try {
            const localStorageItem = localStorage.getItem(JJALBOT_HISTORY_STORAGE_KEY);
            if(localStorageItem !== null) {
                this.searchHistoryData = new Set(jsonParse(localStorageItem));
            } else {
                this.searchHistoryData = new Set();
            }
        } catch(error) {
            throw new Error(`localStorage 초기화시 에러가 발생하였습니다. ${error}`);
        }
    };

    const onSearchResult = (searchResultData) => {
        this.searchResult.setState(searchResultData);
    };

    const onAddSearchHistory = (inputData) => {
        try {
            this.searchHistoryData.add(inputData);
            localStorage.setItem(JJALBOT_HISTORY_STORAGE_KEY, jsonStringify([...this.searchHistoryData]));

            const localStorageItem = localStorage.getItem(JJALBOT_HISTORY_STORAGE_KEY);
            this.searchHistory.setState(jsonParse(localStorageItem));
        } catch(error) {
            throw new Error(`localStorage에 항목추가시 에러가 발생하였습니다. ${error}`);
        }
    };

    const onFetchJjalbot = (historyData) => {
        this.searchKeyword.fetchData(historyData);
    }

    this.init();
}

export default App
