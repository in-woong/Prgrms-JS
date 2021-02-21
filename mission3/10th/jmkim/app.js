import SearchResult from './searchResult.js';

export default function App($app) {
  document
  .querySelector('#search-keyword')
  .addEventListener('keyup', function(e) {
    fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
      .then(x => x.json())
      .then(data => {
        searchResult.setState(data)
      })
  })

  const searchResult = new SearchResult({
    $app,
    ininitalState: [],
  })
}