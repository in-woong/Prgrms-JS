function TodoInput($app,addItem){
  
  const inputWrapper = document.createElement('div');
  const todoAddInput = document.createElement('input');
  const todoAddBtn = document.createElement('button');
  todoAddBtn.innerText = "작성하기";
  todoAddInput.classList.add('todo__input');
  todoAddInput.setAttribute('placeholder','할 일을 입려하세요.');
  inputWrapper.appendChild(todoAddInput);
  inputWrapper.appendChild(todoAddBtn);
  $app.appendChild(inputWrapper);

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
  this.todoInputBtnHandler = (e) => {
    if(todoAddInput.value.trim() !== ""){
      addItem(todoAddInput.value);
      todoAddInput.value = '';
      todoAddInput.focus();
    }else {
      alert("입력된 todo가 없습니다.");
      return
    }
  };

  todoAddInput.addEventListener('keyup',this.todoInputHandler);
  todoAddBtn.addEventListener('click',this.todoInputBtnHandler);
}

export default TodoInput;