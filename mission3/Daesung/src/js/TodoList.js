function TodoList($target, data) {
  this.$target = $target;
  this.data = data;
  // console.log(this.data);

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

  this.removeTodo = () => {};



  this.setState = data => {
    this.data = data;
    this.render();
  };


  this.render = function() {
    const removeButtonText = "remove"

    const htmlString = this.data.map(function(todo) {
      return `<li id=${todo.id}>
                <input type="checkbox" ${todo.isCompleted?"checked":""}>
                <span>${todo.isCompleted?`(완료) <s>${todo.text}</s>`:todo.text}</span>          
                <button class="removeButton">${removeButtonText}</button>
              </li>`;
    });

    $target.innerHTML = `<ul>${htmlString.join("")}</ul>`;
  };


    // const $todoList = document.createElement("ul");

    // this.data.map(function(todo) {
    //   const li = document.createElement("li");
    //   li.id = todo.id;

    //   const delBtn = document.createElement("button");
    //   const span = document.createElement("span");
    //   delBtn.innerText = "remove";
    //   delBtn.classList = "removeBotton";
    //   span.innerText = li.id + todo.text;
    //   li.appendChild(span);
    //   li.appendChild(delBtn);

    //   $todoList.appendChild(li);
  //   });

  //   $target.innerHTML = $todoList.innerHTML;
  // };

  this.render();
  this.addEvents();
}
