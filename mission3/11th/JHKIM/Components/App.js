import SearchInput from './SearchInput.js'

export default class App {
    constructor({ $app }) {
        this.$app = $app;

        this.$children = [];

        this.register(new SearchInput({
            $app,
            onSearchInput: async(text) => {
                /*global fetch*/
                const data = await (await fetch(`https://jjalbot.com/api/jjals?text=${text}`)).json();
                console.log(JSON.stringify(data, null, 2))
                const htmlString = `${data.map(d => `<img src="${d.imageUrl}">`).join('')}`
            }
        }))

    }

    register(component) {
        this.$children.push(component);
    }

}
