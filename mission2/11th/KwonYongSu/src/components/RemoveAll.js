function TodoRemoveAll($app,removeAllTodoItems){
  this.$target = document.createElement("div");
  this.$target.innerText = '전체 목록 삭제';
  $app.appendChild(this.$target);

  this.$target.addEventListener('removeAll',()=>{
    const confirmState = confirm('전체 목록을 삭제하시겠습니까?');
    if(confirmState){
      removeAllTodoItems();
    }
  })

  this.$target.addEventListener('click',()=>{
    const event = new Event('removeAll')
    this.$target.dispatchEvent(event);
  })
}

export default TodoRemoveAll;