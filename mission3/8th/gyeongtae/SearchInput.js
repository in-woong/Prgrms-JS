export default function SearchInput(data, renderEle, inputSearchKeyword) {
  this.data = data
  this.renderEle = document.createElement('input')
  this.renderEle.id = 'search-keyword'
  renderEle.append(this.renderEle)
  this.inputSearchKeyword = inputSearchKeyword
  this.render = () => {
    this.renderEle.value = this.data
    this.renderEle.focus()
  }
  this.setState = (nextData) => {
    this.data = nextData
    this.render()
  }
  this.render()
  this.renderEle.addEventListener('keyup', this.inputSearchKeyword)
}
