import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import SearchHistory from './SearchHistory.js';

export default function App(){
    this.historyWord = [];
    
    const $inputTarget = document.querySelector('#search-keyword');
    const $resultTarget = document.querySelector('#search-result');
    const $historyTarget = document.querySelector('#search-history');

    this.setImageData = (data) => {
        this.searchResult.setState(data);
    }

    this.setHistoryData = (data) => {
        this.historyWord.push(data);
        this.searchHistory.render(this.historyWord);
    }

    this.render = () => {
        this.searchResult.render();
    }

    this.searchInput = new SearchInput($inputTarget, this.setImageData, this.setHistoryData, this.goSearch);
    this.searchResult = new SearchResult(this.data, $resultTarget);
    this.searchHistory = new SearchHistory($historyTarget);
}