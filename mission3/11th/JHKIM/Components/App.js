import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import SearchHistory from './SearchHistory.js';
import { searchUmzzal } from '../js/Api.js';

export default class App {
    constructor({ $app }) {
        this.$app = $app;
        this.state = { searchResult: [], searchHistory: [] };

        this.$children = [];

        this.register(new SearchHistory({
            $app,
            initialState: this.state,
            onClickHistory: async(text) => {
                try {
                    this.setState('searchResult', await searchUmzzal(text));
                }
                catch (err) {
                    console.error(err);
                }
            },
        }));

        this.register(new SearchInput({
            $app,
            onSearchInput: async(text) => {
                try {
                    this.setState('searchResult', await searchUmzzal(text));
                    if (text) {
                        this.setState('searchHistory', [...this.state.searchHistory, text]);
                    }
                }
                catch (err) {
                    console.error(err);
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
}
