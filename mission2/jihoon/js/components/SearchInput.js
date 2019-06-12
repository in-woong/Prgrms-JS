class SearchInput {
  constructor(target) {
    this.target = target;
  }
  render() {
    return `<input id="${this.target.substr(1)}"/>`;
  }
  listen(fn) {
    const $el = document.querySelector(this.target);
    let timer;
    $el.addEventListener('keyup', (e) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(async () => fn(await getJjals(e.target.value), e.target.value), 1000);
    });
  }
}
