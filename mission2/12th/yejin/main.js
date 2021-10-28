var data = [
    {
      id: new Date().valueOf(), 
      text: 'JS 공부하기',
      isCompleted : false
    },
    {
      id: new Date().valueOf() + 1,
      text: 'JS 복습하기',
      isCompleted : false 
    },
  ]
  
  const $target = document.querySelector('#todo-list'); 
  const $inputBox = document.querySelector('#todo-input');
  const $inputCount =document.querySelector('#todo-count'); 
  
  //todo-list 렌더링
  const todoList = new TodoList($target, data); 

  //todo-input 렌더링 
  const todoInput = new TodoInput($inputBox); 

  //todo-count 렌더링 
  const todoCount = new TodoCount($inputCount, data);


  const $input = document.querySelector('#todo-text'); 
  const $inputBtn = document.querySelector('#todo-btn');
  //element 추가로직
  function addTodoList (){
    const nowTime = new Date().valueOf(); 
    const value = { 
      id: nowTime, 
      text : $input.value,  
      isCompleted : false
    }
    if(value && value !== '') data.push(value);
    new TodoList($target, data);
    new TodoCount($inputCount, data);
    $input.value = '';
  }

  //element요소 삭제 
  function removeElem(id){ 
    const $listElem = document.getElementById(id); 
    $listElem.remove();
    data= data.filter(item => item.id !== id);
  }

  function completeConfirm(id){ 
    data = data.map(item => {
      if(item.id === id) item.isCompleted = !item.isCompleted; 
      return item;
    });
    new TodoList($target, data);
    new TodoCount($inputCount, data);
  }

  //element 요소 추가하는 이벤트
  $inputBtn.addEventListener("click", addTodoList); 
  $input.addEventListener("keypress", function(e){ 
    if(e.keyCode === 13) addTodoList();
  }); 

  //완료 되면 (완료) 를 붙여주거나 <s></s>로 표현 



  
  