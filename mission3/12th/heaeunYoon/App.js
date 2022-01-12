import getImages from './api/getImages.js'
import SearchResult from './SearchResult.js'

function debounce(func, timeout = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, timeout)
  }
}

function App({ $target }) {
  this.state = []

  const searchResult = new SearchResult({ initialState: [], $target })

  const setImages = debounce(async (value) => {
    const images = await getImages(value)

    searchResult.setState(images)
  })

  document
    .querySelector('#search-keyword')
    .addEventListener('input', ({ target: { value } }) => {
      setImages(value)
    })
}

export default App
