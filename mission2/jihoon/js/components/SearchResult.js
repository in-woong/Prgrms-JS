class SearchResult {
  constructor(data=[], target) {
    this.data = data;
    this.target = target;
    this.keyword = '';
  }
  render() {
    return `<div id="fetched-keyword"></div><div id="${this.target.substr(1)}"></div>`
  }
  update() {
    const $data = document.querySelector(this.target);
    const $keyword = document.querySelector('#fetched-keyword');
    if (this.data.length < 1) {
      $data.innerHTML = "not found";
    } else {
      $data.innerHTML = `${this.data.map((d) => `<div><img src="${d.imageUrl}"><div>Tags: ${d.tags.join('#')}</div>`).join('')}`;
    }
    $keyword.innerHTML = `keyword: ${this.keyword}`;
  }
  setState(data, keyword) {
    this.data = data;
    this.keyword = keyword;
    this.update();
  }
}
