import { debounce } from './misc.js'

export default function SearchInput({ $app, onSearch }) {
  this.$target = document.createElement('input')
  this.onSearch = onSearch

  $app.appendChild(this.$target)

  // event binding
  this.$target.addEventListener('keyup', (e) => debounce(() => {
    this.onSearch(e.target.value)
  }))
}