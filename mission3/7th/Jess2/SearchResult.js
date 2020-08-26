function SearchResult (images, $TARGET) {
  this.images = images;

  this.createImagesHTMLString = function () {
    return this.images.map((imageItem) => {
      return `<img src="${imageItem.imageUrl}" alt="Image">`;
    }).join('');
  }

  this.render = function () {
    if (this.images.length === 0) {
      $TARGET.innerHTML = '검색 결과 없음';
    } else {
      $TARGET.innerHTML = this.createImagesHTMLString();
    }
  }

  this.render();
}
