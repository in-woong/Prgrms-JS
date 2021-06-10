import SearchInput from './SearchInput.js'

export default class App {
    constructor({ $app, initialState }) {
        this.$app = $app;
        this.state = initialState;

        this.$children = [];

        this.register(new SearchInput({
            $app,
            onSearchInput: async(text) => {
                /*global fetch*/
                const data = await (await fetch(`https://jjalbot.com/api/jjals?text=${text}`)).json();
                this.setState(data);
            }
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

    setState(newState) {
        this.state = newState;
        this.render();
    }

}
