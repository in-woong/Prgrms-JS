import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import { request } from "./api.js";
import SearchHistory from "./components/SearchHistory.js";
import { getItem, setItem } from "./utils/Storage.js";


export default function App({$target}){
    this.state = {
        searchResult: [],
        searchHistory: getItem('history', []),
    };

    const $searchHistory = new SearchHistory({
        $target,
        initialState: this.state.searchHistory,
        onClick: async(value) => {
            try{
                const data = await request(value);
                this.setState(data);
            }catch(e){
                console.error(e);
            }
        }
    });

    const $searchInput = new SearchInput({
        onKeyup: async(value) => {
            try{
                if(value === ''){
                    this.setState([]);
                }else{
                    const data = await request(value);
                    this.setState(data);

                    //히스토리용
                    const historyList = this.state.searchHistory.filter(({text}) => text !== value); //같은 글자 안 넣기
                    this.setHistorystate([
                        ...historyList,
                        {
                        text: value
                        }
                    ]);
                } 
            }catch(e){
                console.error(e);
            }
        }
    });

    const $searchResult = new SearchResult({
        $target: document.querySelector('#search-result'),
        initialState: this.state.searchResult,
    });

    //결과 출력용
    this.setState = (nextState) => {
        this.state.searchResult = nextState;
        $searchResult.setState(this.state.searchResult);
    }
    
    //히스토리 목록용
    this.setHistorystate = (nextState) => {
        setItem('history', nextState);
        this.state.searchHistory = nextState;
        $searchHistory.setState(this.state.searchHistory);
    }
};
