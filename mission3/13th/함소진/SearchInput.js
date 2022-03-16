import { debounce } from './util.js'

export default function SearchInput(elementId, getSearchData) {
  const $searchInput = document.querySelector(elementId)

  $searchInput.addEventListener(
    'keyup',
    debounce((e) => {
      getSearchData(e.target.value.trim())
    }, 300)
  )
}
