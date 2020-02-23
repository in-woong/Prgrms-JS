function App() {
  document.getElementById('search-keyword').addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      this.onSearch(e.target.value)
      e.target.value = ''
    }
  })
  this.onSearch = function(keyword) {
    const data = fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
      .then(response => response.json())
      .then(
        data => new SearchResult(data, document.getElementById('search-result'))
      )
  }
}
