const Observable = class {
  constructor() {
    this.observers = new Set();
  }
  subscribe(fn) {
    this.observers.add(fn);
  }
  unsubscribe(fn) {
    this.observers.delete(fn);
  }
  fire(data) {
    [...this.observers].forEach(observer => observer(data));
  }
};

export default Observable;
