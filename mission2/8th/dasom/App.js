
function App(){
  var data = [
      {
        text: 'JS 공부하기',
        isCompleted: true
      },
      {
        text: 'JS 복습하기',
        isCompleted: false
      }
    ];
  

  this.toggleTodo = (idx) => {
      this.data[idx].isCompleted = !this.data[idx].isCompleted;
      this.render();
  }

  this.deleteTodo = (idx) => {
      this.data.splice(idx, 1);
      this.render();
  }  

  this.addTodo = () => {
    const inputText = document.querySelector('input').value;
    this.data.push({
      text: inputText,
      isCompleted: false
    });
    document.querySelector('input').value = '';
    this.render();
  }

  this.render = () => {
    this.todoList.setState(this.data);
    this.todoInput.setState();
  }

  
  this.data = data;
  const $target = document.querySelector('#todo-list');
  this.todoList = new TodoList(this.data, $target, this.toggleTodo, this.deleteTodo);
  this.todoInput = new TodoInput($target, this.addTodo);
  
    
}

