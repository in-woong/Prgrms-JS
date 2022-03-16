export default function SearchResult({ $target, results }) {
  this.state = results

  this.$resultBox = document.createElement('div')
  this.$resultBox.id = 'search-result'

  $target.appendChild(this.$resultBox)

  this.template = () => {
    return this.state && this.state.length > 0
      ? this.state
          .map(
            (jjal) => `
        <div data-jjal-id="${jjal._id}" class="jjal-item">
          <img src="${jjal.imageUrl}" alt="${jjal.title}" />
        </div>
      `
          )
          .join('')
      : `<p class="no-data">검색 결과가 없습니다 :(</p>`
  }

  this.render = () => {
    this.$resultBox.innerHTML = this.template()
  }

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }

  this.render()
}
