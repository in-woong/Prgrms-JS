export default class SearchInput {
  constructor({ inputSearch }) {
    this.inputSearch = inputSearch
    this.$input = document.querySelector('#search-keyword')
    
    this.$input.addEventListener('keyup', e => this.inputSearch(e))
  }
}
