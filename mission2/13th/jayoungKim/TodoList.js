function TodoList(data, $target){
  this.data = data;
  this.$target = $target;


  this.render = () => {
    
    this.$target.innerHTML = this.data.map(
      (todos, idx) => todos.isCompleted ? 
      `<li data-index='${idx}'>(완료)<s>${todos.text}</s> <button class="delete-todo-btn">삭제</button></li>` : 
      `<li data-index='${idx}'><span>${todos.text}</span> <button class="delete-todo-btn">삭제</button></li>` 
    )
    .join("")
  } 
  
  this.setState = (nextData) =>{
    this.data = nextData;
    this.render();
  }

  this.addState = () =>{
    const $form = document.querySelector('#addTodo');
    $form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const $input = $form.children[0];
      this.setState([
        ...this.data,
        {
          text :$input.value
        }
      ])
      $input.value = '';
    })

  }

  this.deleteState = () =>{
    document.addEventListener('click', (e)=>{
      if( !e.target.classList.contains('delete-todo-btn')) return; //이런 코드를 많이 쓰나요?
      // event.target의 index를 가져오는법? 
      // 형제 노드의 문자열을 this.data에서 찾아 삭제한다? 

      const targetIndex = e.target.parentNode.getAttribute('data-index')
      delete this.data[targetIndex]

      this.render();
    })
  }
  
  this.completeState = () =>{
    document.addEventListener('click', (e) =>{
      // console.log(e.target.tagName)
      if(e.target.parentNode.tagName === "LI"){
        const targetIndex = e.target.parentNode.getAttribute('data-index')
        this.data[targetIndex].isCompleted = this.data[targetIndex].isCompleted ? false : true
        this.render();
      }
    })
  }

  this.render();
  //함수 실행 위치를 어디에 작성해야하나요? 
  this.addState();
  this.deleteState();
  this.completeState();

}