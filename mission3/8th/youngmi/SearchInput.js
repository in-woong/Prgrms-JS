import debounce from './debounce.js';

function SearchInput(app) {
    this.app = app;
    const $searchInput = document.querySelector('#search-keyword');

    this.searchData = async (e) => {
        const keyword = e.target.value;
        const url = `https://jjalbot.com/api/jjals?text=${keyword}`;

        try {
            const response = await fetch(url)
            const jjals = await response.json()
            this.app.setState(jjals, keyword)
        } catch (error) {
            console.log(error)
        }
    }

    $searchInput.addEventListener('keyup', debounce(this.searchData, 1000));
}

export default SearchInput;
