import debounce from './debounce.js';

function SearchInput(app) {
    this.app = app;
    const $searchInput = document.querySelector('#search-keyword');

    this.searchData = async (e) => {
        const keyword = e.target.value;
        const url = `https://jjalbot.com/api/jjals?text=${keyword}`;

        const fetchData = await fetch(url)
            .then(data => data.json())
            .then(data => {
                // console.log(data);
                this.app.sendData(data, keyword);
            });
        debounce(fetchData, 1000);
    }
    $searchInput.addEventListener('keyup', this.searchData);
}
export default SearchInput;