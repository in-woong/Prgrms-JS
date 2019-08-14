(function () {
  document.querySelector('#search-keyword').addEventListener('keyup', function (e) {
    fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
      .then(x => x.json())
      .then((data) => {
        const searchResult = new SearchResult(data, '#search-result')
        searchResult.render()
      })
  });
})();