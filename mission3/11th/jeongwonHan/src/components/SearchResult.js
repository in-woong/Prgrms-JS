import lazyLoadImage from '../util/Lazyloading.js'
import { checkUrlPattern } from '../util/validator.js'

function SearchResult({ $target, state }) {
  this.$target = $target
  this.state = state

  this.render = (state) => {
    if (state == null) {
      this.$target.innerHTML =
        '<div class="no-result">짤을 검색해 보세요🍕</div>'
      return
    }

    if (Array.isArray(state) && state.length < 1) {
      this.$target.innerHTML =
        '<div class="no-result">검색 결과가 없습니다😥</div>'
      return
    }

    const htmlString = `${state
      .map(
        (gifs) => `
        <ul class="gif-wrapper">
              ${
                typeof gifs.imageUrl === 'string' && checkUrlPattern
                  ? `<li><img data-src="${gifs.imageUrl}"></li>`
                  : '<li><p>이미지를 찾을 수가 없어요😥</p></li>'
              }
        </ul>
    `
      )
      .join('')}`
    this.$target.innerHTML = htmlString

    const $gifImages = document.querySelectorAll('.gif-wrapper img')
    $gifImages.forEach(lazyLoadImage)
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render(this.state.gifs)
  }
}

export default SearchResult
