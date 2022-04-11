
import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";
import { fetchJjals } from "./jjalbotApi.js";
import SearchHistory from "./SearchHistory.js";

export default function App({ $target }) {
    this.$target = $target
    this.state = {
        searchResult: [],
        searchHistories: [],
    }

    this.setState = (nextState) => {
        this.state = nextState;

        searchHistory.setState(this.state.searchHistories);
        searchResult.setState(this.state.searchResult);
    }

    const searchHistory = new SearchHistory({ 
        $target,
        initialState: this.state.searchHistories,
        onClick: async (keyword) => {
            const data =  await fetchJjals(keyword);

            this.setState({
                ...this.state,
                searchHistory: data,
            });

        }
    });



    this.render = () => {
        const searchInput = new SearchInput({
            $target,
            onChange: async (keyword) => {
                if (keyword && keyword.length > 0) {
                    const data = await fetchJjals(keyword);
                    const nextHistories = [...this.state.searchHistories];
                    
                    if (!nextHistories.includes(keyword)){
                        nextHistories.push(keyword);
                    }

                    this.setState({
                        ...this.state,
                        searchHistories: nextHistories,
                        searchResult: data,
                    });
                }
            }
        },
        )
    }

    this.render();

    const searchResult = new SearchResult({ 
        $target, 
        initialState: this.state.searchResult,
    });


}