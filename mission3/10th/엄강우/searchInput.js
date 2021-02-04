export default function SearchInput($searchInput) {
  this.$searchInput = $searchInput
  
  this.render = () => {
    this.$searchInput.value = ""
    this.$searchInput.focus()  
  }
}