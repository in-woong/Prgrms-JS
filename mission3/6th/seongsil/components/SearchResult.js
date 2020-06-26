function SearchResult($target, data) {
  this.jjalbotData = data;

  if (!new.target) {
    throw new Error('SearchResult를 new로 사용해야 합니다.');
  }

  this.render = () => {
    if(this.jjalbotData) {
      $target.innerHTML = this.jjalbotData.map(data =>
        `<img src="${data.imageUrl}">`
      ).join('');
    } else {
      $target.innerHTML = '검색 결과가 없습니다.';
    }
  }

  this.setState = (nextData) => {
    this.jjalbotData = nextData;
    this.render();
  }

  this.render();
}

export default SearchResult;
