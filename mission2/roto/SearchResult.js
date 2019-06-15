function SearchResult(initalData, target) {
  const $target = document.querySelector(target);
  let data = initalData

  this.setState = function (nextData) {
    data = nextData
    this.render()
  }
  this.render = function () {
    $target.innerHTML = `${data.map((d) => `<img src="${d.imageUrl}">`).join('')}`
  }
}
