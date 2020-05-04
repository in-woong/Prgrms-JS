function SearchResult(target, data) {

  this.data = data;
    
  this.render = () => {
    if(this.data) {
      document.querySelector(target).innerHTML = this.data.map(d => `<img src="${d.imageUrl}">`).join('');
    } else {
      document.querySelector(target).innerHTML = '검색 결과가 없습니다.';
    }
  }

  this.setState = nextData => {
    this.data = nextData;
    this.render();
  }

  this.render();
}

export default SearchResult
