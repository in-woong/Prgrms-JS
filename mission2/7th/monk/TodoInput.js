function TodoInput({ onAdd }) {
  
  const ENTER_KEY_CODE = 13;

  const addTodoItem = ($input) => {
    if(!$input.value || !$input.value.trim()){
      $input.value = '';
      alert("빈값 또는 공백입니다.");
      return;
    } 
    onAdd($input.value);
    $input.value = '';
  }

  document.querySelector('#inputer').addEventListener('keyup', (event) => {  
    const { keyCode, target } = event;
    if(keyCode === ENTER_KEY_CODE){
      addTodoItem(target);
    }
  })
  
  document.querySelector('#add-button').addEventListener('click', (event) => {
    
    const $input = document.querySelector('#inputer');
    
    addTodoItem($input);
    $input.focus();
  })

  document.querySelector('#remove-all-button').addEventListener('click', () => {
    //custom event 발사
    document.querySelector('#todo-list').dispatchEvent(new CustomEvent('removeAll'))
  })
}
