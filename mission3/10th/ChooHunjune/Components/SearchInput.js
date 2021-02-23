export default function SearchInput({ $searchInput, onSearch }) {
  this.$target = $searchInput
  this.onSearch = onSearch

  this.$target.addEventListener(
    'keyup',
    (e) => {
      const keyword = e.target.value
      onSearch(keyword)
    }
  )
}
