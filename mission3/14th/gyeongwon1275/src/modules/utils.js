export const debounce = (func, wait = 300) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      clearTimeout(timeout);
      func(...args);
    }, wait);
  };
};

export function useState(initialState) {
  this.state = initialState;
  this.listeners = [];

  this.listen = fn => {
    this.listeners.push(fn);
  };

  this.call = () => {
    this.listeners.forEach(fn => {
      fn && fn();
    });
  };

  this.setState = newState => {
    this.state = newState;

    this.call();
  };
  this.getState = () => this.state;
}
