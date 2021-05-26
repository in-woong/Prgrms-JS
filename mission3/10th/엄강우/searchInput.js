export default function SearchInput($searchInput, handleInput) {
  this.$searchInput = $searchInput
  
  let timer;
  this.debounce = (event) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(async () => {
      await handleInput(event)
    }, 200);
  }

  this.$searchInput.addEventListener('input', (event) => this.debounce(event))

  this.render = () => {
    this.$searchInput.value = ""
    this.$searchInput.focus()  
  }
}
