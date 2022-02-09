export default function SearchInput({ $target, onSearch }) {
  this.$input = document.createElement('input')
  this.$input.placeholder = '검색어를 입력하세요'

  $target.appendChild(this.$input)

  this.render = () => {}

  this.$input.addEventListener('keyup', function (e) {
    onSearch(e.target.value)
  })
  this.render()
}
