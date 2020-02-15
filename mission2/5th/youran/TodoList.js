function TodoList(data, targetId, deleteTodo, setTodoCompleted) {
  if(!new.target) {
    throw new Error("new 생성자로 함수를 호출하세요.");
  }

  try{
    isValidData(data);
  }catch(error) {
    console.log(error);
    return;
  }  

  try{
    isValidTargetId(targetId);
  }catch(error) {
    console.log(error);
    return;
  }
    
  const NULLTEXT = "할 일을 입력하세요!";

  this.data = data;
  this.targetId = targetId;
  this.deleteTodo = deleteTodo;
  this.setTodoCompleted = setTodoCompleted;

  this.render = function() {
    if(this.data.length === 0) {
      document.querySelector(`#${this.targetId}`)
      .innerHTML = NULLTEXT;
      return;
    }

    document.querySelector(`#${this.targetId}`).innerHTML = this.data
      .map(
        (item) => 
        `<div class="todo-text" data-id=${item.id}>
        ${item.isCompleted
        ? `<s>${item.text}</s>` 
        : item.text}
        <button class="todo-delete-button" value=${item.id}>삭제</button>
        </div>`)
      .join('');
    
    const $todoTexts = document.querySelectorAll('.todo-text');
    $todoTexts.forEach(text => {
      text.addEventListener('click', e => {
        this.setTodoCompleted(e.target.dataset.id);
      });
    });

    const $deleteButtons = document.querySelectorAll('.todo-delete-button');
    $deleteButtons.forEach(button => {
      button.addEventListener(
        'click', e => this.deleteTodo(e.target.value)
      );
    });
  }

this.setState = function(nextData) {
  isValidData(nextData);
  this.data = nextData;
  this.render();
}

  this.render();
}
