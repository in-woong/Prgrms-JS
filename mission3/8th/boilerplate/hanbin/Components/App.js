import SearchResult from './SearchResult.js';
import SearchInput from './SearchInput.js';
import SearchHistory from './SearchHistory.js';

export default function App($target) {

    this.$target = $target;

    this.updateData = async (inputValue) => {
        const fetchData = await fetch(`https://jjalbot.com/api/jjals?text=${inputValue}`);
        const jsonObject = await fetchData.json();
        const htmlString = jsonObject.map(d => `<img src="${d.imageUrl}">`).join('');
        this.setState(htmlString);
    }

    this.addHistory = (inputValue) => {
        this.searchHistory.addHistoryElem(inputValue);
    }

    this.setState = (newData) => {
        this.data = newData;
        this.render();
    }

    this.render = () => {
        this.searchResult.setState(this.data);
    }

    this.searchHistory = new SearchHistory(this.$target, this.updateData);
    this.searchInput = new SearchInput(this.$target, this.updateData, this.addHistory);
    this.searchResult = new SearchResult(this.data,this.$target);
}
