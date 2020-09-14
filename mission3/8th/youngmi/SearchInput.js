
function SearchInput(app) {

    this.app = app;
    const $searchInput = document.querySelector('#search-keyword');

    this.searchData = (e) => {
        if (e.key === 'Enter' && e.target.value !== '') {
            const keyword = e.target.value;
            const url = `https://jjalbot.com/api/jjals?text=${keyword}`;

            fetch(url)
                .then(data => data.json())
                .then(data => {
                    //app으로 보낸다 
                    this.app.sendData(data);
                });
            $searchInput.value = '';
        }
    }
    $searchInput.addEventListener('keyup', this.searchData);

}
export default SearchInput;