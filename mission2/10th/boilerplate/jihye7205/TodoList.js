function TodoList($target, todos) {
  if (validateType(todos) && validateFormat(todos)) {
    this.$target = $target;
    this.data = todos;
  }

  this.render = function () {
    this.$target.innerHTML = this.data.map((todo) => `<div class="todo-list"><div class="todo-list list">${!todo.isCompleted ? todo.text : `<s>` + todo.text + `</s>`}</div></div>`).join('');
  };

  this.setState = function (nextData) {
    if (validateType(nextData) && validateFormat(nextData)) {
      this.data = nextData;
      this.render();
      this.addEvent();
    }
  };

  this.addEvent = function () {
    this.$target.childNodes.forEach((element, index) => {
      const trash = element.appendChild(document.createElement('input'));
      trash.setAttribute('type', 'button');
      trash.setAttribute('class', 'trash');
      trash.value = '삭제';

      trash.addEventListener(
        'click',
        function (event) {
          event.target.parentNode.remove();
          this.setState(this.data.filter((list, order) => order != index));
        }.bind(this)
      );
    });

    this.$target.querySelectorAll('.todo-list.list').forEach((list, index) => {
      list.addEventListener(
        'click',
        function () {
          this.data[index].isCompleted = !this.data[index].isCompleted;
          this.setState(this.data);
        }.bind(this)
      );
    });
    //this.checkTodolist();
  };

  this.render();
  this.addEvent();
}
