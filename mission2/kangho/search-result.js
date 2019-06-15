const SearchResult = function(data, selector) {

  this.$container = null;
  this.result = data;
  this.isLoading = false;

  this.render = function() {
    this.$container.innerHTML = this.createTemplate();
  }

  this.createTemplate = function() {
    let template = '';
    template += `${this.isLoading ? '<div>Loading....</div>' : ''}`;
    template += `${!this.result.length && !this.isLoading ? '<div>검색 결과가 없습니다</div>' : ''}`;
    template += this.result
      .map(item => `<div><img src="${item.imageUrl}" /></div>`)
      .join('');
    return template;
  }

  this.init = function($host, selector) {
    this.$container = document.createElement('div');
    if (selector[0] === '#') {
      this.$container.id = selector.slice(1);
    } else if (selector[0] === '.') {
      this.$container.class = selector.slice(1);
    }
    $host.append(this.$container);
  }


  this.setState = function(data) {
    const { result, isLoading } = data;
    if (result !== this.result || isLoading !== this.isLoading) {
      this.result = result;
      this.isLoading = isLoading;
      this.render();
    }
  }
}