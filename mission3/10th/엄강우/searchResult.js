export default function SearchResult($searchResult, data) {
  this.$searchResult = $searchResult
  
  this.render = () => {
    this.$searchResult.innerHTML = data.map((image) => `<li><<image src="${image.imageUrl}"><image></li>`).join("")
  }
}
