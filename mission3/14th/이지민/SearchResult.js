export default function SearchResult({ $target, initialState }) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    const htmlString = `${this.state
      .map((data) => `<img src="${data.imageUrl}">`)
      .join('')}`;
    $target.innerHTML = htmlString;
  };
  this.render();
}
