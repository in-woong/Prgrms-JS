(function () {
    const searchResult = new SearchResult("", "#search-result");
    document
        .querySelector('#search-keyword')
        .addEventListener('keyup', function (e) {
            LoadApi.loadApi(e.target.value)
                .then(data => {
                    console.log(JSON.stringify(data, null, 2));
                    searchResult.setState(data);
                })
        })
})();
