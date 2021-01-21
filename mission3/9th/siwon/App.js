import SearchKeyword from './SearchKeyword.js';
import SearchResult from './SearchResult.js';
import SearchHistory from './SearchHistory.js';

// SearchKeyword와 SearchResult를 관리하는 App
export default function App() {
    this.$inputTarget = document.querySelector('#search-keyword');
    this.$resultTarget = document.querySelector('#search-result');
    this.$historyTarget = document.querySelector('#search-history');
    this.resultData = [];
    this.historyKeywords = [];

    this.onSearch = async (keyword) => {
        try{
            const res = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`);
            const result = await res.json();
            this.setState(result, keyword);
        } catch(e) {
            //alert("검색 결과를 가져올 수 없습니다");
            console.log(e);
        }
    }

    this.setState = (nextData, keyword) => {
        this.resultData = nextData;
        this.searchResult.setState(this.resultData);
        
        if(!this.historyKeywords.includes(keyword)) {
            this.historyKeywords.push(keyword);
            this.searchHistory.setState(this.historyKeywords);
        }
    }

    this.deleteHistory = (index) => {
        this.historyKeywords.splice(index, 1);
        this.searchHistory.setState(this.historyKeywords);
    }

    this.searchKeyword = new SearchKeyword({ 
        onSearch: this.onSearch, 
        target: this.$inputTarget 
    });

    this.searchResult = new SearchResult({ 
        data: this.resultData, 
        target: this.$resultTarget 
    });

    this.searchHistory = new SearchHistory({
        historyKeywords: this.historyKeywords,
        onAddHistory: this.addHistory,
        onDelHistory: this.deleteHistory,
        onSearch: this.onSearch,
        target: this.$historyTarget
    })
}
