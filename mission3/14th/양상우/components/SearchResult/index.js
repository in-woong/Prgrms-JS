export function SearchResult({ $target, initialState }) {
  this.$element = document.createElement('div');
  this.$element.className = 'search-result';
  $target.appendChild(this.$element);

  this.state = initialState;
  this.render = function () {
    this.clear();
    const markup = this.generateMarkup();
    this.$element.insertAdjacentHTML('beforeend', markup);
  };

  this.setState = function (nextState) {
    this.state = nextState;
    this.render();
  };

  this.clear = function () {
    this.$element.innerHTML = '';
  };

  this.generateMarkup = function () {
    return this.state.data
      .map(
        (d) => `
        <div class='search-list' data-id=${d._id}>
        <h1>${d.title} </h1> 
        <img src="${d.imageUrl}">
        <div class= 'list-tags'>
            ${d.tags
              .map(
                (tag) => `
            <div class='list-tag'>#${tag}</div>`
              )
              .join('')}
            </div>
        </div>
        `
      )
      .join('');
  };
}
