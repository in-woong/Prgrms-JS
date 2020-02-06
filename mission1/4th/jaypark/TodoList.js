function TodoList(items, targetId) {
  const isString = (obj) => typeof obj === 'string';
  const validate = (msg, fn) => { if (fn()) throw new Error(msg); };

  this.render = () => {
    const buildItem = (item) => {
      const tag = item.isCompleted ? 'strike' : 'span';
      return `<div class=todo-item-box><${tag}>${item.text}</${tag}></div>`;
    };

    this.$target.innerHTML = this.items.map(buildItem).join('');
  };

  this.setState = (_items, redraw = true) => {
    validate('items must not be null', () => !_items);
    validate('items must be array', () => !Array.isArray(_items));
    validate('items must have text', () => !_items.every((item) => isString(item.text)));

    this.items = _items;

    if (redraw) this.render();
  };

  this.setTarget = (_targetId) => {
    const target = document.getElementById(_targetId);
    validate(`target id (${_targetId}) not exists`, () => !(target));

    this.$target = target;
  };


  // body starts
  validate('must call with new', () => !(this instanceof TodoList));

  this.setTarget(targetId);
  this.setState(items, false);
}
