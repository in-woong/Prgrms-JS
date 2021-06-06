function TodoInput($app,addItem){
  
  const todoInput = document.createElement('input');
  todoInput.classList.add('todo__input');
  $app.appendChild(todoInput);

  this.todoInputHandler = (e) => {
    if(e.keyCode == 13){
      const inputElem = e.target;
      if(inputElem.value.trim() !== ""){
        addItem(inputElem.value);
        inputElem.value = '';
        inputElem.focus();
      }else {
        alert("입력된 todo가 없습니다.");
        return
      };
    };
  };

  todoInput.addEventListener('keyup',this.todoInputHandler);
}

export default TodoInput;