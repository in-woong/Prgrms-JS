
function SearchResult({ data, $target }) {
  this.data = data;

  this.setState = (prevData) => {
    this.data = prevData;
    this.render();
  };

  this.render = () => {
    const htmlString = `${this.data
      .map(d => `<img src="${d.imageUrl}">`)
      .join('')}`;
    $target.innerHTML = htmlString;
  };
}

export default SearchResult;
