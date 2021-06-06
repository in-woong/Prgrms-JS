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

  const todoInputHandler = (e) => {
    if(e.keyCode == 13) todoItemHandler();
  };

  const todoInputBtnHandler = (e) => { todoItemHandler() };

  const todoItemHandler=()=>{
    if(todoAddInput.value.trim() !== ""){
      addItem(todoAddInput.value);
      todoAddInput.value = '';
      todoAddInput.focus();
    }else {
      alert("입력된 할 일이 없습니다.");
      return
    }
  }

  todoAddInput.addEventListener('keyup',todoInputHandler);
  todoAddBtn.addEventListener('click',todoInputBtnHandler);
}

export default TodoInput;