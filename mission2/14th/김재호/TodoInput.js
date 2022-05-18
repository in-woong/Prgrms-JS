export default function TodoInput($app) { // TodoInput 컴포넌트 #76
  const $input = $app.querySelector('#todo-input');
  const $addBtn = $app.querySelector('#todo-button-add');
  const $removeBtn = $app.querySelector('#todo-button-remove');

  $input.addEventListener('keypress', addTodo)
  $addBtn.addEventListener('click', addTodo);
  $removeBtn.addEventListener('click', removeAllTodo);

  function addTodo(event) { // todo 추가하기
    const Enter = 13;
    if(event.type === 'click' || event.keyCode === Enter) {  // 클릭 또는 엔터키
      const text = $input.value;
      if(text === '') return; // 빈 문자열은 저장 금지
  
      const data = {
        text,
        isCompleted: false,
        id: Date.now()  // id로 구별
      }
      $input.value = '';

      $app.dispatchEvent(new CustomEvent('AddTodoEvent', {detail: data}));  // App 컴포넌트로 이벤트
    }
    $input.focus(); // todo-input에 포커싱
  }

  function removeAllTodo() {  // todo 전체 삭제하기
    $app.dispatchEvent(new CustomEvent('RemoveAllEvent'));  // App 컴포넌트로 이벤트
  }
}