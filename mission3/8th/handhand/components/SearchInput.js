import { fetchImageData } from '../api/index.js'
import { debounce } from '../utils/index.js'

function SearchInput({ $parent, onChangeData }) {
  this.keyword = ''

  this.init = () => {
    const $keywordInput = document.querySelector('#search-keyword')
    $keywordInput.addEventListener('keyup', debounce(this.onKeyupInput, 1000))
  }

  this.getState = () => this.keyword

  this.setState = (newValue) => {
    this.keyword = newValue
    $parent.dispatchEvent(
      new CustomEvent('new-keyword', {
        detail: { keyword: this.keyword },
      })
    )
  }

  this.onKeyupInput = async (event) => {
    const keyword = event.target.value
    if (!keyword) return

    this.setState(keyword)
    const datas = await fetchImageData(keyword)
    onChangeData(datas)
  }

  this.getImagesWithoutHistory = async (keyword) => {
    const datas = await fetchImageData(keyword)
    onChangeData(datas)
  }

  this.init()
}

export default SearchInput
