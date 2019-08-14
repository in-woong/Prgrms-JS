import CommonComponent from './common-component.js';

export default class SearchInput extends CommonComponent {

  constructor() {
    super();
  }

  addEventListener(eventName, fn) {
    this.$container.addEventListener(eventName, fn);
  }
}