import debounce from './debounce.js'

export default function SearchInput({ $app, onSearch }) {
  const $target = document.createElement('input')
  $target.className = 'SearchInput'
  $app.appendChild($target)

  this.$target = $target
  this.onSearch = onSearch

  // 이벤트 바인딩 하기
  $target.addEventListener(
    'keyup',
    debounce((e) => {
      const keyword = e.target.value

      if (keyword.length > 0) {
        console.log(keyword)
        this.onSearch(keyword)
      }
    }, 1000)
  )
}
