import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'

export default class App {
    constructor({ $app }) {
        this.$app = $app;
        this.state = { searchResult: [], searchHistory: [] };

        this.$children = [];

        this.register(new SearchHistory({
            $app,
            initialState: this.state,
            onClickHistory: async(text) => {
                await this.searchUmzzal(text);
            },
        }));

        this.register(new SearchInput({
            $app,
            onSearchInput: async(text) => {
                await this.searchUmzzal(text);
                if (text) {
                    this.setState('searchHistory', [...this.state.searchHistory, text]);
                }
            }
        }));

        this.register(new SearchResult({
            $app,
            initialState: this.state
        }));

    }

    register(component) {
        this.$children.push(component);
    }

    render() {
        this.$children.forEach(child => {
            if (child.setState) {
                child.setState(this.state);
            }
        });
    }

    setState(key, newState) {
        this.state[key] = newState;
        this.render();
    }

    async searchUmzzal(text) {
        if (text) {
            /*global fetch*/
            try {
                const response = await fetch(`https://jjalbot.com/api/jjals?text=${text}`);
                
                if(!response.ok){
                    throw new Error('네트워크 에러');
                }
                
                this.setState('searchResult', await response.json());
            }
            catch (err) {
                console.error(err);
            }
        }
        else {
            this.setState('searchResult', []);
        }
    }
}
