const SearchResult = function({$app, data}) {
  const $target = document.createElement('div');
  $target.className = 'search-result';
  this.state = data;
  $app.appendChild($target);
  console.log($target);
  this.render = () => {
    if (data.length === 0) {
      $target.innerHTML = '<div>검색 결과가 없습니다.</div>';
    } else {
      const resultDataHtml =` ${data
        .map(v => (`<img src=${v.imgUrl} alt="${title}-img" />`))
        .join('')}
      `
      $target.innerHTML = resultDataHtml;
    }
  }
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }
}

export default SearchResult;
