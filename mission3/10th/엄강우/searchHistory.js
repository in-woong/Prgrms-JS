export default function SearchHistory ($searchHistory) {
  this.$searchHistory = $searchHistory

  this.render = (data) => {
    this.state = data
    this.$searchHistory.innerHTML = this.state.map((element) => `<li>${element}</li>`).join('')
  }
}
