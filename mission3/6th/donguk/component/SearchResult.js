import Component from './Component.js'
import { checkSelector } from '../utils/validation.js'

const createHTMLElement = (image) => {
  const { url, title } = image
  return `<div class="image-item">
            <img src=${url} alt=""/>
            <div class="item-title">${title}</div>
         </div>`
}

export default class SearchResult extends Component {
  constructor(props) {
    super()
    const { selector, images } = props
    checkSelector(selector)
    this.$target = document.querySelector(selector)
    this.images = images
    this.render()
  }

  render() {
    this.$target.innerHTML = this.images.map((image) => createHTMLElement(image)).join('')
  }

  setState(nextData){
    this.images = nextData
    this.render()
  }
}
