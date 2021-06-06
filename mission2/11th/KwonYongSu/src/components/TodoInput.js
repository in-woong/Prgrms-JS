import TodoList from './TodoList.js'
function TodoInput($app,callback){
  
  const todoInput = document.createElement('input');
  todoInput.classList.add('todo__input');
  console.log(todoInput)
  $app.appendChild(todoInput);
  console.log($app)
  this.callback = callback;
  this.todoInputHandler = (e) => {
    if(e.keyCode == 13){
      if(e.target.value.trim() !== ""){
        console.log('add value',e.target.value);
        this.callback(e.target.value);
        e.target.value = '';
        e.target.focus();
      }else {
        alert("입력된 todo가 없습니다.");
        return
      };
    };
  };

  todoInput.addEventListener('keyup',this.todoInputHandler);
}

export default TodoInput;