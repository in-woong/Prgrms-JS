class SearchInput {

  constructor() {
    this.selector = null;
    this.$container = null;
  }

  init($host, selector) {
    this.$container = document.createElement('input');
    if (selector[0] === '#') {
      this.$container.id = selector.slice(1);
    } else if (selector[0] === '.') {
      this.$container.class = selector.slice(1);
    }
    $host.append(this.$container);
  }

  addEventListener(eventName, fn) {
    this.$container.addEventListener(eventName, fn);
  }
}