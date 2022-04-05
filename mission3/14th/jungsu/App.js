
import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";


export default function App({ $target, initialState }) {
    this.$target = $target
    this.state = initialState;

    this.render = () => {
        const searchInput = new SearchInput({
            $target,
            onKeyup: ($input) => {
                fetch(`https://jjalbot.com/api/jjals?text=${$input.value}`)
                    .then((x) => x.json())
                    .catch(function (error) {
                        console.log('There has been a problem with your fetch operation: ', error.message);
                    })
                    .then((data) => {
                        this.state = data;
                    })

                searchResult.setState(this.state);
            },
        })

        const searchResult = new SearchResult({ $target, initialState: this.state });
    }


    this.render();
}