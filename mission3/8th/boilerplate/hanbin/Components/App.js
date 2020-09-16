import SearchResult from './SearchResult.js';
import SearchInput from './SearchInput.js';
import SearchHistory from './SearchHistory.js';

export default function App($target) {

    this.$target = $target;
    this.data = {
        searchText: '',
        searchedDatas: [],
        searchedTexts: []
    }

    this.onClickHistory = (clickedText) => {
        this.setState({
            searchText: clickedText,
            searchedDatas: this.data.searchedDatas,
            searchedTexts: this.data.searchedTexts
        });
    }

    this.onKeyUpInput = (inputText) => {
        this.setState({
            searchText: inputText,
            searchResults: this.data.searchDatas,
            searchedTexts: [
                ...this.data.searchedTexts,
                inputText
            ] 
        });
    }

    this.setState = async (newData) => {
        this.data = newData;
        const fetchData = await fetch(`https://jjalbot.com/api/jjals?text=${this.data.searchText}`);
        const jsonObject = await fetchData.json();
        this.data.searchedDatas = jsonObject;
        this.searchResult.setState(this.data.searchedDatas);
        this.searchHistory.setState(this.data.searchedTexts);
        this.render();
    }

    this.render = () => {
        this.searchResult.render();
        this.searchHistory.render();
    }

    this.searchHistory = new SearchHistory(this.$target, this.onClickHistory);
    this.searchInput = new SearchInput(this.$target, this.onKeyUpInput);
    this.searchResult = new SearchResult(this.$target);
}
