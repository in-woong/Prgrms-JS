import { dummyData } from './dummy.js'

export default function SearchResult({ $target, initialData }) {
  const $gridBox = document.createElement('div')
  $gridBox.className = 'search-result'
  $target.append($gridBox)

  this.target = $gridBox
  this.state = initialData

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    // review4 - this.state 가 빈배열일 경우 체크
    if (this.state && Array.isArray(this.state) && this.state.length !== 0) {
      const searchedItem = this.state.map((item) => `<div class="img-container"><img src="${item.imageUrl}" /></div>`).join('')
      this.target.innerHTML = searchedItem
    } else {
      this.target.innerHTML = ''
    }
  }

  this.render()
}
