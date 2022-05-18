class Component {
  constructor($target, props, store) {
    this.$target = $target;
    this.props = props;
    this.store = store;

    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}
  setEvent() {}
  template() {
    return '';
  }
  mounted() {}
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
}

export default Component;
