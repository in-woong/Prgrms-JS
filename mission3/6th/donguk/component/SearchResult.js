import Component from './Component.js'
import { checkSelector } from '../utils/validation.js'

const createHTMLElement = (element) => {
  const { url, title } = element
  const $item = document.createElement('div')
  $item.setAttribute('class', 'image-item')
  const $loadingDiv = document.createElement('div')
  $loadingDiv.className = 'loading'
  $loadingDiv.textContent = 'loading...'
  const $itemTitle = document.createElement('div')
  $itemTitle.className = 'item-title'
  $itemTitle.textContent = title
  const image = new Image()
  image.src = url
  image.alt = ''
  image.onload = () => {
    $item.removeChild($loadingDiv)
  }
  $item.appendChild($loadingDiv)
  $item.appendChild(image)
  $item.appendChild($itemTitle)
  return $item
}

export default class SearchResult extends Component {
  constructor(props) {
    super()
    const { selector, images } = props
    checkSelector(selector)
    this.$target = document.querySelector(selector)
    this.images = images
    this.componentMount()
    this.render()
  }

  render() {
    // 해봐야 하는 것 >검색 안했을 때, 로딩 중 + lazy loading?, 검색 후
    if (this.isUseComponent) {
      const startIndex = (this.currentPage - 1) * (this.size)
      const endIndex = startIndex + this.size
      const currentRenderImages = this.images.slice(startIndex, endIndex)
      if (startIndex === 0) {
        this.$target.innerHTML = `<h2>총 ${this.images.length}개 짤 검색완료.</h2>` // 처음에만,
      }
      currentRenderImages.forEach((image) => {
        this.$target.appendChild(createHTMLElement(image))
      })
    } else { // initial render
      this.$target.innerHTML = '<div>검색어를 기다리고 있어요.</div>'
    }
  }

  componentMount() {
    this.currentPage = 1 // scroll에 따른 lazy loading
    this.size = 10
    this.isUseComponent = false // 검색 안했을 때, 했을 때 flag개
    window.addEventListener('scroll', () => {

    })
  }

  setState(nextData) {
    this.isUseComponent = true
    this.images = nextData
    this.render()
  }
}
