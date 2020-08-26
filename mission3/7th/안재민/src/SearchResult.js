const RESULT_EMPTY_NOTICE = '검색결과가 없습니다 새로운 키워드를 입력해주세요.'
const IMAGE_NOT_FOUND =
  'https://bitsofco.de/content/images/2018/12/broken-1.png'

function SearchResult(resultId) {
  this.resultId = resultId
  this.resultElement = null
  this.images = []

  this.getResulteElement = (resultId) => {
    const resultElement = document.getElementById(resultId)
    if (!resultElement) {
      throw new Error(`Invalid result element ID: ${resultId}`)
    }
    return resultElement
  }

  this.render = () => {
    let imageElements
    if (this.images.length === 0) {
      imageElements = `<div>${RESULT_EMPTY_NOTICE}</div>`
    } else {
      imageElements = this.images
        .map((image) => `<img src=${image.imageUrl ?? IMAGE_NOT_FOUND} />`)
        .join('')
    }
    this.resultElement.innerHTML = imageElements
  }

  this.setState = (images) => {
    this.validateImages(images)
    this.images = images
    this.render()
  }

  this.validateImages = (images) => {
    if (!Array.isArray(images)) throw new Error('Invalid image data array')
  }

  this.init = () => {
    this.resultElement = this.getResulteElement(this.resultId)
    this.render()
  }

  this.init()
}

export default SearchResult
