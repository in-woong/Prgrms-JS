; (function () {
  const historyElem = document.querySelector('#search-history');
  const resultElem = document.querySelector('#search-result');
  historyElem.onclick = onClickHistory;
  document.querySelector('#search-keyword')
    .addEventListener('keyup', onKeyUpListener);
  let timer;

  async function fetchFromServer(value) {
    const response = await fetch(`https://jjalbot.com/api/jjals?text=${value}`);
    const data = await response.json();
    //console.log(JSON.stringify(data, null, 2));
    return data;
  }

  function onClickHistory(e) {
    const keyword = e.target.innerHTML;
    fetchAndDraw(keyword, true);
  }

  async function fetchAndDraw (keyword, fromHistory) {
    try {
      console.log("request to server");
      const data = await fetchFromServer(keyword);
      if (!fromHistory) {
        const searchHistory = SearchHistory(keyword, historyElem);
      }
      const htmlString = `${data
        .map(d => `<img src="${d.imageUrl}">`)
        .join('')}`
      
      const searchResult = new SearchResult(htmlString, resultElem);
    } catch (err) {
      console.error(err);
    }
  }

  async function onKeyUpListener(e) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => fetchAndDraw(e.target.value, false), 400);
  }
})()
