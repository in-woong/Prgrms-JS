export default class CommonComponent {
  constructor() {
    this.selector = null;
    this.$container = null;
  }

  init($host, tag = 'div', selector) {
    this.$container = document.createElement(tag);
    if (selector.startsWith('#')) {
      this.$container.id = selector.slice(1);
    } else if (selector.startsWith('.')) {
      this.$container.class = selector.slice(1);
    }
    $host.append(this.$container);
  }

}