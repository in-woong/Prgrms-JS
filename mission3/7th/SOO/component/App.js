import SearchResult from './SearchResult.js';
import SearchInput from './SearchInput.js';
import SearchHistory from './SearchHistory.js';
import {
    getJjals
} from './JjalAPI.js';
import {
    debounce
} from '../utils/debounce.js'

export default function App() {
    const DELAY_TIME = 2000

    this.target = document.querySelector('#search-keyword')
    this.jjals = []
    this.keywords = []

    const searchResult = new SearchResult({
        jjals: this.jjals,
        target: this.target
    })

    const searchHistory = new SearchHistory({
        DELAY_TIME,
        keywords: this.keywords,
        onClickHistory: (keyword) => {
            debounce(async () => {
                const data = await getJjals(keyword)
                searchResult.setState(data)
            }, DELAY_TIME)
        }
    });

    const searchInput = new SearchInput({
        target: this.target,
        DELAY_TIME,
        onSearch: (keyword) => {
            debounce(async () => {
                const data = await getJjals(keyword)

                searchResult.setState(data)
                searchHistory.setState(keyword)

                this.target.value = ''
                this.target.blur();
                this.target.focus();

            }, DELAY_TIME)
        }
    })
}
