(function () {
  const $SEARCH_KEYWORD = document.getElementById('search-keyword');
  const $SEARCH_RESULT = document.getElementById('search-result');

  $SEARCH_KEYWORD.addEventListener('keyup', function (e) {
    const searchWord = e.target.value;
    if (searchWord) {
      fetch(`https://jjalbot.com/api/jjals?text=${searchWord}`)
        .then(x => x.json())
        .then(data => {
          const searchResult = new SearchResult(data, $SEARCH_RESULT);
        })
    }
  })
})()


