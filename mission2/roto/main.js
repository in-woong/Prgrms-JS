(function () {
  const searchResult = new SearchResult([], '#search-result');

  document.querySelector('#search-keyword').addEventListener('keyup', function (e) {
    fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
      .then(x => x.json())
      .then((data) => {
        searchResult.setState({
          keyword: e.target.value,
          images: data
        });
      })
  });
})();