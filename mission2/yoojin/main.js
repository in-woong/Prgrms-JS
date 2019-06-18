(function() {
  document.querySelector('#search-keyword').addEventListener('keyup', function(e) {
    fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`) // input값으로 전달
      .then((x) => {
        return x.json()
      })
      .then((data) => {
        // console.log(JSON.stringify(data, null, 2))
        const searchResult = new SearchResult([], '#search-result');
        searchResult.render(data);
        // document.querySelector('#search-result').innerHTML = `${data.map((d) => `<img src="${d.imageUrl}">`).join('')}`
      })
  });
})();
