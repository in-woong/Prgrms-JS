class SearchInput {
  constructor() {
    this.id = '#search-keyword';
  }
  render() {
    return `<input id="${this.id.substr(1)}"/>`;
  }
  listen(callback, milli=1000) {
    const $el = document.querySelector(this.id);
    let timer;
    $el.addEventListener('keyup', (e) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(async () => {
        callback(e.target.value);
      }, milli);
    });
  }
}
