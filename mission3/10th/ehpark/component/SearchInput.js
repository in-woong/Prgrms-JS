export default function SearchInput($app, onSearch) {
  this.$app = $app
  this.onSearch = onSearch
  this.$input = document.createElement('input')
  this.$input.type = 'text'
  this.$input.id = 'search-keyword'

  this.eventSearch = () => {
    let timer = ''
    this.$input.addEventListener('keyup', async (e) => {
      // debounce
      clearTimeout(timer);
      timer = setTimeout(function(){
        onSearch(e.target.value)
      }, 500)
    })
  }

  this.render = () => {
    this.$app.appendChild(this.$input)
  }

  this.render()
  this.eventSearch()
}
 