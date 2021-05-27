
  function TodoList (data) {
    if(!new.target){
          throw new Error('new 를 설정해주세요')
    }
    
    if(!data){
      throw new Error('data를 확인해주세요')
    }

    this.data = data;
    this.todoDiv = document.querySelector("#todo-list");

    this.render = function() {
        if(!this.data) return;
        this.todoDiv.innerHTML = this.data.map((todo => `<div class="${todo.isCompleted}">${todo.text}</div>`)).join('')
    }
    
    this.setState = function(data){
        this.data = data;
        this.render();
    }
  }

  export default TodoList;