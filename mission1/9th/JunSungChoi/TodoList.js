function TodoList (data) {
  this.data = data;
  this.render = function () {
    document.querySelector('#todo-list').innerHTML = `${data.map(item => item.text)}`
  }
}