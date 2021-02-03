
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

    const liData = this.data.map(function(_data,index) {
      if(_data.isCompleted) {
        return `<li><s>${_data.text}</s><button data-id=${index}>삭제</button></li>`;
      }
      return `<li>${_data.text} <button data-id=${index}>삭제</button></li>`;
    }).join(''); 

    this.element.innerHTML = `<ul>${liData}</ul>`;
  }

  this.setState = function(nextData) {
    this.data = nextData;
    this.render();
  }

  this.add = function(item) {
    const newData = [...this.data,{text:item,isCompleted:false}];
    this.setState(newData);
  }

  this.render();

  this.element.addEventListener('click', (event) => {
      const dataId = event.target.getAttribute('data-id');
      if(dataId!= null) {
        const newData = this.data.filter((item,index) => index != dataId);
        this.setState(newData);
      } 
  });
}

export default TodoList;

  