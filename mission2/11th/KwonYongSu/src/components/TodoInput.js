
function TodoInput($app){
  const todoInput = document.createElement('input')l
  todoInput.classList.add('todo__input');
  $app.appendChild(todoInput);

  this.todoInputHandler = (e) => {
    if(e.keyCode == 13){
      if(e.target.value.trim() !== ""){
        console.log('add value',value);
      }else {
        alert("입력된 todo가 없습니다.");
        return
      };
    };
  };

  todoInput.addEventListener('keyup',this.todoInputHandler);
}

export default TodoInput;