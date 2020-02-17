function TodoList(data, selector, deleteTodo, setTodoCompleted) {
  if(!new.target) {
    throw new Error("new 생성자로 함수를 호출하세요.");
  }

  try{
    isValidData(data);
  }catch(error) {
    showErrorMessage(error);
    return;
  }  

  try{
    isValidSelector(selector);
  }catch(error) {
    showErrorMessage(error);
    return;
  }
    
  const NULLTEXT = "할 일을 입력하세요!";

  this.data = data;
  this.$todoList = document.querySelector(selector);
  this.deleteTodo = deleteTodo;
  this.setTodoCompleted = setTodoCompleted;

  this.$todoList.addEventListener('click', e => {
    if(e.target.nodeName === 'BUTTON') {
      this.deleteTodo(e.target.value);
    }else if(e.target.dataset.id) {
      this.setTodoCompleted(e.target.dataset.id);
    }
  });

  this.render = function() {
    if(this.data.length === 0) {
      this.$todoList.innerHTML = NULLTEXT;
      return;
    }

    this.$todoList.innerHTML = this.data
      .map(
        (item) => 
        `<div class="todo-text" data-id=${item.id}>
        ${item.isCompleted
        ? `<s>${item.text}</s>` 
        : item.text}
        <button class="todo-delete-button" value=${item.id}>삭제</button>
        </div>`)
      .join('');
  }

this.setState = function(nextData) {
  isValidData(nextData);
  this.data = nextData;
  this.render();
}

  this.render();
}
