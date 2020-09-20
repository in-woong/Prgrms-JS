import { fetchImageData } from '../api/index.js'
import { debounce } from '../utils/index.js'

function SearchInput({ onChangeData }) {
  this.keyword = ''

  this.init = () => {
    const $keywordInput = document.querySelector('#search-keyword')
    $keywordInput.addEventListener('keyup', debounce(this.onKeyupInput, 1000))
  }

  this.onKeyupInput = (event) => {
    const keyword = event.target.value
    if (!keyword) return

    this.setState(keyword, false)
  }

  this.setState = (newValue, isHistory) => {
    this.keyword = newValue
    this.fetchImages(this.keyword, isHistory)
  }

  this.fetchImages = async (keyword, isHistory) => {
    try {
      const datas = await fetchImageData(keyword)
      onChangeData(datas, keyword, isHistory)
    } catch (err) {
      console.log('aaa')
      console.error(err.message)
    }
  }

  this.init()
}

export default SearchInput
