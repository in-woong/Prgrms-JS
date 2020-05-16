export default function SearchKeyword($target, idName, searchInputHandler) {
  this.$target = $target
  this.$el = document.createElement('input')
  this.$el.id = idName
  this.$el.type = 'text'

  this.bindEvent = () => {
    this.$el.addEventListener('keyup', (e) => {
      searchInputHandler(e)
    })
  }

  this.render = () => {
    this.$target.innerHTML = `
    <label for="${idName}">움짤 검색기</label>
    `
    this.$target.appendChild(this.$el)
  }
}
