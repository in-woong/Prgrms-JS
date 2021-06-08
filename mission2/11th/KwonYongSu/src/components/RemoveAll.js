function TodoRemoveAll($app,removeAllTodoItems){
  // 전체 목록 삭제 button 생성
  this.$target = document.createElement("div");
  this.$target.innerText = '전체 목록 삭제';
  this.$target.classList.add('remove__all__items');
  $app.appendChild(this.$target);

  this.$target.addEventListener('removeAll',()=>{
    // 사용자가 전체 목록을 삭제한다는 것을 재 인지 시켜주기 위해서 confirm 함수를 적용하였다.
    const confirmState = confirm('전체 목록을 삭제하시겠습니까?');
    if(confirmState){
      removeAllTodoItems();
    }
  })

  // click 이벤트가 발생하면 아래에서 
  this.$target.addEventListener('click',()=>{
    // removeAll 컴스텀 이벤트를 생성한다.
    const event = new Event('removeAll');
    // 생성한 이벤트를 붙혀준다.
    this.$target.dispatchEvent(event);
  })
}

export default TodoRemoveAll;