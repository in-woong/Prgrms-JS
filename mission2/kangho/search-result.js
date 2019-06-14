const SearchResult = function(data, selector) {

  this.$container = document.querySelector(selector);
  this.result = data;

  this.render = function() {
    const template = this.result
      .map(item => `<div><img src="${item.imageUrl}" /></div>`)
      .join('');
    this.$container.innerHTML = template;
  }

  this.setState = function(data) {
    if (data !== this.result) {
      this.result = data;
      this.render();
    }
  }
}