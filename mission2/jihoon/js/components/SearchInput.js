class SearchInput {
  constructor() {
    this.id = '#search-keyword';
  }
  render() {
    return `<input id="${this.id.substr(1)}"/>`;
  }
  listen(resultFn, keywordFn) {
    const $el = document.querySelector(this.id);
    let timer;
    $el.addEventListener('keyup', (e) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(async () => {
        resultFn(await getJjals(e.target.value));
        keywordFn(e.target.value);
      }, 1000);
    });
  }
}
