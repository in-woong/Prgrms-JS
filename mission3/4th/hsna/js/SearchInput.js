export default function SearchInput($target, handleSearch) {
  this.$target = $target
  this.$target.addEventListener('keyup', handleSearch)
}
