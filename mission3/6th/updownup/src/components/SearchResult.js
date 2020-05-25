// 검색 결과 화면 
export default function SearchResult ({ $target, keyword }) {

  this.$target = $target
  this.data = keyword

  this.render = () => {
    const htmlString = this.data
            .map(({ imageUrl }) => `<img src="${imageUrl}"/>`)
            .join('')
    this.$target.innerHTML = htmlString
  }

  this.setState = (result) => {
    this.data = result
    this.render()
  }

}