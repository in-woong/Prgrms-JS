const debounce = (callback) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => callback(...args), 1000)
  }
}

function SearchKeyword({ $input, onSearch }) {
  $input.addEventListener(
    'keyup',
    debounce((e) => onSearch(e.target.value))
  )
}

export default SearchKeyword
