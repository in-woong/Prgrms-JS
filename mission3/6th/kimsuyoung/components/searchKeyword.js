const debounce = (callback) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => callback(...args), 1000)
  }
}

function searchKeyword({ $inputSelector, onSearch }) {
  $inputSelector.addEventListener(
    'keyup',
    debounce((e) => onSearch(e.target.value))
  )
}

export default searchKeyword
