function SearchResult({ $target }) {
  this.render = function (resultData) {
    $target.innerHTML = '';
    if (resultData) {
      const htmlString = `${resultData
        .map((d) => `<img src="${d.imageUrl}">`)
        .join('')}`;
      $target.innerHTML = htmlString;
    }
  };
  this.setState = function (resultData) {
    this.render(resultData);
  };
}

export default SearchResult;
