class FetchedKeyword {
  constructor() {
    this.id = '#fetched-keyword';
    this.data = '';
  }
  render() {
    return `<h3 id=${this.id.substr(1)}></h3>`;
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
