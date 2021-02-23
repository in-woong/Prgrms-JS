export default function SearchInput({ $app, onSearch }) {
  const $target = document.createElement('input')
  $target.id = 'search-keyword'
  $app.appendChild($target)
  this.$target = $target
  this.onSearch = onSearch

  // 이벤트 바인딩 하기
  $target.addEventListener('keyup', function (e) {
    const keyword = e.target.value
    onSearch(keyword)
  })
}
