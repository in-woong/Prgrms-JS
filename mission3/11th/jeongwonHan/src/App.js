import SearchInput from './components/SearchInput.js'

function App($target) {
  this.$target = $target
  const searchInput = new SearchInput({
    $target: this.$target.querySelector('#search-keyword'),
    state: this.state,
    onSearch: (keyword) => {
      console.log(keyword)
    },
  })
}

export default App
