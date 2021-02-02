
function TodoList(data, selector) {

  this.data = data;
  this.selector = selector;
  this.element = document.querySelector(this.selector);

  this.validation = function() {
    if(!data) throw new Error("data is error");
    if(!selector) throw new Error("id is error");
    if(!Array.isArray(data)) throw new Error("data is not Array");
    if(!(this instanceof TodoList)) throw new Error("Add new keyword");
  }

  this.render = function() {
    this.validation();

    const liData = this.data.map(function(_data) {
      if(_data.isCompleted) {
        return `<li><s>${_data.text}</s><button>삭제</button></li>`;
      }
      return `<li>${_data.text}<button>삭제</button></li>`;
    }).join(''); 

    this.element.innerHTML = `<ul>${liData}</ul>`;
  }

  this.setState = function(nextData) {
    this.data = nextData;
    this.render();
  }

  this.render();
}

export default TodoList;

  