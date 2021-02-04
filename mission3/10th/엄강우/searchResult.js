export default function SearchResult($searchResult, data) {
  this.$searchResult = $searchResult
  
  this.render = () => {
    this.$searchResult.innerHTML = ""
    data.forEach((image) => {
      let imageDiv = document.createElement('div')
      imageDiv.innerHTML = `<image src="${image.imageUrl}"><image>`
      this.$searchResult.appendChild(imageDiv)
    })
  }
}