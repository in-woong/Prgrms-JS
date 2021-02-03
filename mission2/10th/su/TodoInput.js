
function TodoInput(selector) {

  this.selector = selector;
  this.target = document.querySelector(this.selector);

  this.addEvent = function(callback) {
    this.target.addEventListener('keyup', (event) => {
      const ENTERKEY = 13;
      if(event.keyCode === ENTERKEY) {
        if(typeof callback == 'function') {
          callback(event.target.value);
          this.target.value = '';
        }
      }
    });
  }
}

export default TodoInput;

  