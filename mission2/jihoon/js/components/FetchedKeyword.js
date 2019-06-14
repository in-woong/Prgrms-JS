class FetchedKeyword {
  constructor() {
    this.id = '#fetched-keyword';
    this.data = '';
  }
  render() {
    return `<div id=${this.id.substr(1)}></div>`;
  }
  update() {
    const $keyword = document.querySelector(this.id);
    $keyword.innerHTML = `keyword: ${this.data}`;
  }
  setState(data) {
    this.data = data;
    this.update();
  }
}
