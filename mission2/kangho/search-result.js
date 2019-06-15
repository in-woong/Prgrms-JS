const SearchResult = function(data, selector) {

  this.$container = document.querySelector(selector);
  this.result = data;
  this.isLoading = false;

  this.render = function(template) {
    this.$container.innerHTML = template;
  }

  this.createTemplate = function() {
    let template = '';
    template += `${this.isLoading ? '<div>Loading....</div>' : ''}`;
    template += this.result
      .map(item => `<div><img src="${item.imageUrl}" /></div>`)
      .join('');
    return template;
  }

  this.setState = function(data) {
    const { result, isLoading } = data;
    if (result !== this.result || isLoading !== this.isLoading) {
      this.result = result;
      this.isLoading = isLoading;
      const template = this.createTemplate();
      this.render(template);
    }
  }
}