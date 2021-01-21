import { checkNewKeyword } from './util/validation.js'

const ALTERNATE_IMG_SRC = '../Sunnyk/img/default.png'

export default function SearchResult({ $app, memeData }) {
  checkNewKeyword(new.target)

  const $target = document.createElement('div')
  $target.className = 'SearchResult'
  this.$target = $target
  $app.appendChild(this.$target)

  this.memeData = memeData

  $target.addEventListener(
    'error',
    (e) => {
      if (e.target.tagName === 'IMG') {
        e.target.src = ALTERNATE_IMG_SRC
      }
    },
    true
  )

  this.setState = (nextData) => {
    this.memeData = nextData
    this.render()
  }

  this.render = () => {
    if (this.memeData.length === 0) {
      this.$target.innerHTML = '<p>검색 결과가 없습니다.</p>'
    } else {
      this.$target.innerHTML = `
      <ul class="search-result-list">
        ${this.memeData
          .map(
            (meme) =>
              `<li>
                <img class="meme-img" src="${meme.imageUrl}" alt="${meme.title}" />
              </li>`
          )
          .join('')}
      </ul>
    `
    }
  }

  this.render()
}
