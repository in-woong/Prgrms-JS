function SearchResult(data, result) {
  const $searchKeyword = document
    .querySelector('#search-result')
    .addEventListener('keyup', this.onKeyup)
  this.data = data
  this.result = result

  this.onKeyup = (e) => {
    fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
      .then((x) => x.json())
      .then((data) => {
        console.log(JSON.stringify(data, null, 2))
        this.setState(data)
      })
  }

  this.setState = (data) => {
    this.data = data
    this.render()
  }

  this.render = () => {
    const htmlString = `${data
      .map((d) => `<img src="${d.imageUrl}">`)
      .join('')}`
    $searchKeyword.innerHTML = htmlString
  }

  this.render()
}
