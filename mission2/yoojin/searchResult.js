function SearchResult(data, target) {
  const $target = document.querySelector(target);
  let $images = data;
  this.setState = function() {

  },
  this.render = function(images) {
    $images = `${images.map((img) => {
      return `<img src="${img.imageUrl}">`
    }).join('')}`;
    $target.innerHTML = $images;
  }
}
