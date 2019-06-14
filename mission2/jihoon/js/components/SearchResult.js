class SearchResult {
  constructor() {
    this.data = [];
    this.id = '#search-result';
  }
  render() {
    return `<div id="${this.id.substr(1)}"></div>`
  }
  update() {
    const $data = document.querySelector(this.id);
    if (this.data.length < 1) {
      $data.innerHTML = "not found";
    } else {
      $data.innerHTML = `${this.data.map((d) => `<div><img src="${d.imageUrl}"><div>Tags: ${d.tags.join('#')}</div>`).join('')}`;
    }
  }
  setState(data, keyword) {
    this.data = data;
    this.update();
  }
}
