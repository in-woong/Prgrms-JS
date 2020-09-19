import SearchResult from './SearchResult.js';
import SearchInput from './SearchInput.js';
import SearchHistory from './SearchHistory.js';
import { fetchJjal } from '../Util/api.js';

export default function App($target) {

    this.$target = $target;
    this.data = {
        searchedDatas: [],
        searchedTexts: []
    }

    this.onClickHistory = async (clickedText) => {
        const newSearchedDatas = await fetchJjal(clickedText);
        this.setState({
            ...this.data,
            searchedDatas: newSearchedDatas
        })
    }

    this.onKeyUpInput = async (inputText) => {
        const newSearchedDatas = await fetchJjal(inputText);
        this.setState({
            searchedDatas: newSearchedDatas,
            searchedTexts: [
                ...this.data.searchedTexts,
                inputText
            ] 
        });
    }

    this.setState = (newData) => {
        this.data = newData;
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
