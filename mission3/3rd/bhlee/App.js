function App(data, target) {
  if (this.constructor !== App) {
    throw new Error('App should be called by "new" keyword')
  }

  this.target = target
  this.state = data

  this.searchResult = null

  this.init = () => {
    document.getElementById(target).innerHTML = `
      <input id="search-keyword" />
      <div id="search-result"></div>
    `

    this.searchResult = new SearchResult(this.state, 'search-result')

    const onKeyUp = (e) => debounce(async () => {
      const data = await getJalBotByText(e.target.value)
      this.searchResult.setState(data)
    }, 200)

    new SearchInput('search-keyword', onKeyUp)
  }

  this.render = () => {
    this.searchResult.render()
  }

  this.setState = (data) => {
    this.state = data;
    this.render()
  }

  this.init()
  this.render()
}
