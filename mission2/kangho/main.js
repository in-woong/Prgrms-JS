
const BASE_URL = 'https://jjalbot.com/api/jjals';

(async function() {
  const target = '#search-keyword';
  const selector = '#search-result';
  const searchResult = new SearchResult([], selector);
  const api = new API(BASE_URL);
  document.querySelector(target).addEventListener('keyup', async function (e) {
    const result = await api.httpGet(e.target.value) || [];
    searchResult.setState(result);
  });
})();

