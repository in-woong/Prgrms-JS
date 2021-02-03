
function TodoInput(selector) {

  this.selector = selector;
  this.target = document.querySelector(this.selector);

  this.validation = function() {
    if(!data) throw new Error("data is error");
    if(!selector) throw new Error("selector is error");
    if(!(this instanceof TodoInput)) throw new Error("Add new keyword");
  }

  this.render = function() {
    // this.validation();
  }

  this.addEvent = function(callback) {
    this.target.addEventListener('keyup', (event) => {
      const ENTERKEY = 13;
      if(event.keyCode === ENTERKEY) {
        if(typeof callback == 'function') {
          console.log("keyup")
          callback(event.target.value);
        }
      }
    });
  }

  this.removeEvent = function() {

  }

  this.setState = function(nextData) {
    this.data = nextData;
    this.render();
  }

  this.render();
}

export default TodoInput;

  