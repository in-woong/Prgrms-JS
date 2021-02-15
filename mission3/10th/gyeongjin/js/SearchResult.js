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
    if (this.state) {
      const searchedItem = this.state.map((item) => `<div class="img-container"><img src="${item.imageUrl}" /></div>`).join('')
      this.target.innerHTML = searchedItem
    } else {
      this.target.innerHTML = ''
    }
  }

  this.render()
}
