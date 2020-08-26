function SearchResult(data, target) {
  if (!(this instanceof SearchResult)) {
    throw new Error('error: SearchResult must be called with new!');
  }

  this.images = data;
  this.targetContainer = target;

  this.render = () => {
    if (this.images.length === 0) {
      this.targetContainer.innerHTML =
        '해당 키워드로 검색된 데이터가 없습니다.';
      this.targetContainer.style.display = 'block';
      return;
    }

    const htmlString = `${this.images
      .filter((image) => image.imageUrl)
      .map(
        (image) => `<li><img src="${image.imageUrl}" alt=${image.title}></li>`
      )
      .join('')}`;
    this.targetContainer.innerHTML = htmlString;
    this.targetContainer.style.display = 'block';
  };

  this.setState = (newData) => {
    this.images = newData;
    this.render();
  };
}

export default SearchResult;
