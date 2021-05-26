const ENTERKEY = 13;

function TodoInput(selector) {

  this.selector = selector;
  this.target = document.querySelector(this.selector);

  this.addEvent = function(callback) {
    this.target.addEventListener('keyup', (event) => {
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

  