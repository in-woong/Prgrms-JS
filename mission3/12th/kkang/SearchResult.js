export default function SearchResult({initialState, $target}) {
  this.state = initialState;

  this.target = $target;
  this.$result = document.createElement('div');
  this.$result.id = 'search-result';

  this.setState = (nextState) => {
    this.state = nextState;

    this.render();
  };

  this.render = () => {
    if (this.state) {
      this.$result.innerHTML = this.state
        .map(e => `<img src="${e.imageUrl}">`)
        .join('');

      this.target.appendChild(this.$result);
    }
  };

  this.render();
}
