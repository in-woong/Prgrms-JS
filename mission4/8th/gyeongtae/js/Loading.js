export default function Loading(renderEle, src, isDisplayable) {
  this.renderEle = renderEle
  this.loadingEle = document.createElement('img')
  this.loadingEle.src = src
  this.loadingEle.alt = '로딩 이미지'
  renderEle.append(this.loadingEle)
  this.isDisplayable = isDisplayable

  this.render = () => {
    if (this.isDisplayable) {
      this.loadingEle.style.display = 'block'
    } else {
      this.loadingEle.style.display = 'none'
    }
  }
  this.setState = (nextIsDisplayable) => {
    this.isDisplayable = nextIsDisplayable
    this.render()
  }

  this.render()
}
