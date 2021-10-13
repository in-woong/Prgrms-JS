function TodoInput($app,addItem){
  
  const inputWrapper = document.createElement('div');
  const todoAddInput = document.createElement('input');
  const todoAddBtn = document.createElement('button');
  todoAddBtn.innerText = "작성하기";
  inputWrapper.classList.add('input__wrapper')
  todoAddInput.classList.add('todo__input');
  todoAddBtn.classList.add('todo__input__btn');
  todoAddInput.setAttribute('placeholder','할 일을 입력하세요.');
  inputWrapper.appendChild(todoAddInput);
  inputWrapper.appendChild(todoAddBtn);
  $app.appendChild(inputWrapper);

  // enter 이벤트가 발생하였을 경우 동작한다.
  const todoInputHandler = (e) => {
    if(e.keyCode == 13) todoItemHandler();
  };

  // click 이벤트가 발생하였을 경우 동작한다.
  const todoInputBtnHandler = (e) => { todoItemHandler() };

  // enter 및 click 이벤트가 발생한 경우 동일하게 동작해야 할 내부 로직을 분리하였다.
  const todoItemHandler=()=>{
    // 공백을 제거하고 값이 있는지 판단한다.
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