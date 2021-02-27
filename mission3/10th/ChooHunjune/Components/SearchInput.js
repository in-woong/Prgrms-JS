export default function SearchInput({ $app, onSearch }) {

  const $searchInput = document.createElement('input')
  $searchInput.className = 'SearchInput'
  $app.appendChild($searchInput)

  this.$target = $searchInput

  this.$target.addEventListener(
    'keyup',
    (e) => {
      const { value: keyword } = e.target
      onSearch(keyword)
    }
  )
}
