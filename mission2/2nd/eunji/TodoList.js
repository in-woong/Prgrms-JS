function TodoList($target, data) {
  this.$target =$target;
  this.data = data;

  const setTodoCount = new todoCount(document.querySelector('#todo-count'),this.data)

  this.setState = function(data) {
    this.data = data;
    this.render();
  };
  
  this.delList = function (index) {
    this.data.splice(index,1)
    this.render()
  }
  
  this.complete = function (index) {
    this.data[index].isCompleted = this.data[index].isCompleted ? false : true
    // document.querySelectorAll('span')[index].classList.toggle('complete')
    this.completeStyle()

  }

  this.completeStyle = function () {
    this.data.map((data,index) =>{
      if(data.isCompleted){
        document.querySelectorAll('span')[index].classList.add('complete')
      }else{
        document.querySelectorAll('span')[index].classList.remove('complete')
      }
    })
    setTodoCount.setCount(this.data)
  }

  this.render = function() {
    const htmlString = this.data.map(function(todo,index) {
      return `<li id="${index}"><span>${todo.text}</span> <button class="del-btn">삭제</button></li> `;
    });
    $target.innerHTML = `<ul>${htmlString.join("")}</ul>`;

    // for(let i=0; i<htmlString.length ; i++){
    // $target.innerHTML += htmlString[i]
    // }
    //
    // document.querySelectorAll('.del-btn').forEach(del => {
    //   del.addEventListener('clcik',e => {
    //     console.log('ck')
    //     this.delList(e.target.parentNode.id)
    // })

    this.completeStyle()
    setTodoCount.setCount(this.data)
  };

  // 생성자 함수 생성 시 this.render 자동 실행
  this.render();

}
