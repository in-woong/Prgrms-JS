export default function SearchResult({ $target, initialState }) {
  this.state = initialState;

  this.$element = document.createElement('div');
  $target.appendChild(this.$element);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const htmlString = `${this.state
      .map((d) => `<img src="${d.imageUrl}">`)
      .join('')}`;
    this.$element.innerHTML = htmlString;
  };

  this.render();
}
