export default function SearchInput($searchInput, handleInput) {
  this.$searchInput = $searchInput
  
  this.$searchInput.addEventListener('input', (event) => handleInput(event))

  this.render = () => {
    this.$searchInput.value = ""
    this.$searchInput.focus()  
  }
}
