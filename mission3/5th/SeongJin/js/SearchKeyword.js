export default function SearchKeyword(search) {
  this.search = search
  this.$input = document.querySelector('#search-keyword')

  this.$input.addEventListener('keyup', e => this.search(e))
}
