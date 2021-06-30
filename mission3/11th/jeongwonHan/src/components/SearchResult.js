import lazyLoadImage from '../util/Lazyloading.js'

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
        <div class="gif-wrapper">
              ${
                gifs.imageUrl
                  ? `<img data-src="${gifs.imageUrl}">`
                  : '<p>이미지를 찾을 수가 없어요😥</p>'
              }
        </div>
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
