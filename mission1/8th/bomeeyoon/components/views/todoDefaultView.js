export default class View {
  constructor() {
    this.$element;
  }
  on(event, handler) {
    this.$element.addEventListener(event, handler);
    return this;
  }
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data });
    this.$element.dispatchEvent(evt);
    return this;
  }
}
