export default function SearchInput ({ $target, searchHandler }) {

  this.timer = null
  this.$target = $target
  this.searchHandler = searchHandler

  this.$target.addEventListener('keyup', (e) => {
      this.searchKeywordHandler(e.target.value)
  })

  // TODO: debouncing util로 옮기기
  this.searchKeywordHandler = (keyword) => {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      this.searchHandler(keyword)
      this.render()
    }, 300)
  }

  // TODO: history 관리를 위해 사용
  this.render = () => {
  }

}