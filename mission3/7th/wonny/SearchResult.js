export default function SearchResult(target, data) {
  this.data = data
  this.$target = target

  this.setState = (newData) => {
    this.data = newData
    this.render()
  }

  this.render = () => {
    this.$target.innerHTML = ''

    for (const { imageUrl } of this.data) {
      const $image = document.createElement('img')
      $image.setAttribute('src', imageUrl)
      this.$target.appendChild($image)
    }
  }

  this.render()
}
