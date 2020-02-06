function loadFromStorage() {
  const itemsJson = localStorage.getItem('todoItems');
  return itemsJson ? JSON.parse(itemsJson) : [];
}

function saveToStorage(items) {
  localStorage.setItem('todoItems', JSON.stringify(items));
}

class TodoItems {
  constructor() {
    this.items = [] ;
    this.callbacks = [];
  }

  notify() {
    this.callbacks.forEach( (renderer) => {
      renderer.setState(this.items);
    });
  }

  update() {
    saveToStorage(this.items);
    this.notify();
  }

  init() {
    this.items = loadFromStorage();
    this.notify();
  }

  addListener(listner) {
    this.callbacks.push(listner);
  }

  addItem(text, done) {
    validate('text must not empty', () => text.length <= 0);

    this.items.unshift({ text, done }); // assign by object destruction
    this.update();
  }

  doneItem(idx) {
    this.items[idx].done = true;
    this.update();
  }

  removeItem(idx) {
    this.items.splice(idx, 1);
    this.update();
  }

  purgeAll() {
    this.items = [];
    this.update();
  }
}
