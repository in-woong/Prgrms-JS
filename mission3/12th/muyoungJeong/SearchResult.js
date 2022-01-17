export default function SearchResult($target, images) {
  this.$target = $target
  this.images = images

  this.render()
}

SearchResult.prototype.render = function() {
  if (!this.images) {
    return
  }

  this.$target.innerHTML = this.images.map(imageUrl => `
    <img src=${imageUrl} />
  `).join('') || ''
}
