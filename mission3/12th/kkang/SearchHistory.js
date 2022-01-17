export default function SearchHistory({initialState, $target, onClick}) {
  this.state = initialState;
  this.target = $target;
  this.$ol = document.createElement('ol');
  this.$ol.id = 'search-history';

  this.setState = (nextState) => {
    this.state = nextState.filter((keyword) => keyword.length > 0);
    
    this.render();
  };

  this.bindEvents = () => {
    this.target.addEventListener('click', onClick);
  };

  this.render = () => {
    this.target.appendChild(this.$ol);

    if (this.state) {
      this.$ol.innerHTML = this.state
      .map((keyword) => `<li>${keyword}</li>`
      ).join('');
    }
    this.target.appendChild(this.$ol);
  };

  this.render();
  this.bindEvents();
}
