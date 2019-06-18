function TodoList($target, data) {
  this.$target = $target;
  this.data = data;
  console.log(this.data);

  this.setState = function(data) {
    this.data = data;
    this.render();
  };

  this.addEvents = () => {
    $target.addEventListener("click", event => {
      const id = parseInt(event.target.parentNode.id);
      this.data = this.data.filter(todo => {
        return todo.id !== id;
      });
      console.log(this.data);

      this.setState(this.data);
    });
  };

  this.render = function() {
    const $todoList = document.createElement("ul");

    this.data.map(function(todo) {
      const li = document.createElement("li");
      li.id = todo.id;

      const delBtn = document.createElement("button");
      const span = document.createElement("span");
      delBtn.innerText = "remove";
      delBtn.classList = "removeBotton";
      span.innerText = li.id + todo.text;
      li.appendChild(span);
      li.appendChild(delBtn);

      $todoList.appendChild(li);
    });

    $target.innerHTML = $todoList.innerHTML;
  };

  this.render();
  this.addEvents();
}
