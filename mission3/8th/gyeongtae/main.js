import SearchResult from './SearchResult.js'

function setEvent() {
  document
    .querySelector('#search-keyword')
    .addEventListener('keyup', function (e) {
      fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
        .then((data) => data.json())
        .then((data) => serchResult.setState(data))
    })
}
const serchResult = new SearchResult([], '#search-results')
setEvent()
