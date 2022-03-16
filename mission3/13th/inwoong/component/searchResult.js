function SearchResult({ initialData, $target }) {
  this.state = initialData
  const $result = document.createElement('ul')
  $target.appendChild($result)
  
  this.render = () => {
    if (Array.isArray(this.state)) {
      $result.innerHTML = this.state
        .map(
          (data) =>
            `<li style="list-style:none"><img width="300px" src="${data.imageUrl}" alt="img"/></li>`
        )
        .join('')
    }
  }

  this.setState = (newData) => {
    this.state = newData
    this.render()
  }
  this.render()
}

export default SearchResult
