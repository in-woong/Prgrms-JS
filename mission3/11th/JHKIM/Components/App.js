import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js'

export default class App {
    constructor({ $app }) {
        this.$app = $app;
        this.state = { searchResult: [], searchHistory: [] };

        this.$children = [];

        this.register(new SearchInput({
            $app,
            onSearchInput: async(text) => {
                /*global fetch*/
                if (text) {
                    const data = await (await fetch(`https://jjalbot.com/api/jjals?text=${text}`)).json();
                    this.setState('searchResult', data);
                }
                else {
                    this.setState('searchResult', []);
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
