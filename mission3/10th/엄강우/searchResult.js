export default function SearchResult($searchResult) {
  this.$searchResult = $searchResult
  
  this.render = (data) => {
    this.$searchResult.innerHTML = data.map((image) => `<li><image src="${image.imageUrl}"><image></li>`).join("")
  }
}
